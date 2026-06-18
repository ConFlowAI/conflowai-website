# Deploying conflowai.com (Vercel)

This app is a standard Next.js project. The source lives in this `web/` folder and
is pushed to GitHub. Hosting is on Vercel; the domain DNS is managed wherever
`conflowai.com` is registered (for Google-purchased domains this is now Squarespace
Domains). Workspace email keeps working as long as you don't touch the MX records.

## 1. One-time: deploy to Vercel

1. Go to https://vercel.com and **Sign in with GitHub** (account: `pbisadi`).
2. Click **Add New… → Project**.
3. Find and **Import** the `conflowai-website` repository.
4. Vercel auto-detects Next.js. Leave all defaults. Click **Deploy**.
5. After ~1 minute you get a live URL like `https://conflowai-website.vercel.app`.
   Open it to confirm the site looks right.

## 2. Connect the domain

1. In the Vercel project → **Settings → Domains**.
2. Add `conflowai.com`, then add `www.conflowai.com`.
3. Vercel shows the exact DNS records to create. They are normally:
   - **A** record — Name/Host `@` (root) → Value `76.76.21.21`
   - **CNAME** record — Name/Host `www` → Value `cname.vercel-dns.com`
   (Use the exact values Vercel shows — they are authoritative.)

## 3. Add the DNS records (without breaking email)

1. Open the DNS console for `conflowai.com` (your registrar / Squarespace Domains /
   Google Cloud DNS — wherever DNS is managed).
2. **Add** the A and CNAME records from step 2 above.
3. **Do NOT delete or change the MX records** — those route Google Workspace email.
   You are only adding A/CNAME records; MX is untouched.
4. If an existing A or CNAME record already points the root/`www` somewhere else,
   update it to the Vercel values.

## 4. Finish

- Back in Vercel, the domain shows **Valid Configuration** once DNS propagates
  (minutes to a couple of hours).
- Vercel auto-provisions the HTTPS certificate. The site is then live at
  `https://conflowai.com`.

## Updating the site later

Any push to the `main` branch auto-deploys to production:

```
cd web
git add -A
git commit -m "Update site"
git push
```

Preview deployments are created automatically for other branches / pull requests.

## Local development

```
cd web
npm install   # first time only
npm run dev   # http://localhost:3000
npm run build # production build check
```
