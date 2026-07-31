# Deploy CertAlert Privacy Policy — 3 Minute Guide

This folder contains a minimal Express server that serves the privacy policy at `/privacy`.

## Files
- `server.js` — Express server (privacy policy + health check)
- `package.json` — Dependencies (express, helmet)
- `static-site/privacy/index.html` — The privacy policy

## Deploy in 3 Minutes

### Option A: Railway (Recommended - Free Tier)
1. Go to https://railway.app/new
2. Click "Deploy from GitHub" OR "Empty Project"
3. If using GitHub: select your repo, set root directory to `packages/server/deploy`
4. If empty: drag this entire `deploy/` folder into Railway
5. Railway auto-detects Node.js and deploys
6. Copy your Railway URL (e.g., `https://certalert-production.up.railway.app`)
7. Go to Settings → Domains → Add Custom Domain → enter `zevqo.com`
8. Railway gives you DNS targets — add these to your domain registrar

### Option B: Render (Free Tier)
1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Connect GitHub repo (or use "Public Git repository")
4. Root directory: `packages/server/deploy`
5. Build command: `npm install`
6. Start command: `npm start`
7. Click "Create Web Service"
8. Go to Settings → Custom Domains → Add `zevqo.com`
9. Update DNS at your registrar to point to Render

### Option C: Vercel (Free Tier)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `cd packages/server/deploy && vercel --prod`
3. Add custom domain in Vercel dashboard

### Option D: Netlify (Free Tier)
1. Go to https://app.netlify.com/drop
2. Drag this entire `deploy/` folder onto the page
3. Netlify deploys instantly and gives you a URL
4. Add custom domain `zevqo.com` in site settings

## Verify Deployment

After deploying, test:
```bash
curl https://zevqo.com/privacy
# Should return HTML privacy policy

curl https://zevqo.com/api/health
# Should return: {"status":"ok"}
```

## Important Notes

- The privacy policy is at `/privacy` (not `/privacy.html`)
- HTTPS is required — all these platforms provide it automatically
- The `/api/health` endpoint is included for monitoring
- For production, consider setting `NODE_ENV=production`
