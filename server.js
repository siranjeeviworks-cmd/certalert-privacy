// Minimal production server for privacy policy + API
// Deploy with: node server.js
import express from 'express';
import helmet from 'helmet';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(helmet());

// Privacy policy
app.get('/privacy', (_req, res) => {
  const path = join(__dirname, 'static-site', 'privacy', 'index.html');
  if (existsSync(path)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(readFileSync(path, 'utf-8'));
  } else {
    res.status(404).send('Privacy policy not found');
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Privacy policy: http://localhost:${PORT}/privacy`);
});
