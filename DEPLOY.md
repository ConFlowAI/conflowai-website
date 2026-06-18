# Deploying conflowai.com (Cloudflare Pages)

This app is a Next.js project configured for **static export** (`output: "export"`
in `next.config.ts`), so `next build` emits a plain `out/` folder of HTML/CSS/JS.
Cloudflare Pages serves that directly. DNS for `conflowai.com` is on Cloudflare, so
the domain connects with no manual records and your Workspace email (MX) is untouched.

## 1. One-time: create the Pages project

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
2. Authorize GitHub and select the **`conflowai-website`** repository.
3. Configure the build:
   - **Framework preset:** `Next.js (Static HTML Export)`
     (or set it manually with the values below)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (the repo root is already the web app)
4. Add an environment variable (Build settings → Variables):
   - `NODE_VERSION` = `20`  (the repo also pins this via `.nvmrc`)
5. **Save and Deploy.** You get a live URL like
   `https://conflowai-website.pages.dev`. Open it to confirm.

## 2. Connect the domain

Because DNS is already on Cloudflare, this is just a couple of clicks:

1. In the Pages project → **Custom domains** → **Set up a custom domain**.
2. Add `conflowai.com` (and repeat for `www.conflowai.com`).
3. Cloudflare automatically creates the required CNAME records and provisions HTTPS.
   - It only adds the records needed for the site. **MX records (Workspace email)
     are not affected.**
4. Within minutes the site is live at `https://conflowai.com`.

> Tip: to set up safely first, add a temporary subdomain like
> `staging.conflowai.com`, verify it, then add the apex `conflowai.com`.

## Updating the site later

Every push to `main` triggers an automatic production deploy:

```
cd web
git add -A
git commit -m "Update site"
git push
```

Pull requests / other branches get automatic preview deployments.

## Local development

```
cd web
npm install   # first time only
npm run dev   # http://localhost:3000
npm run build # produces out/ (the static export)
```

## Notes

- Images use `next/image` with `images.unoptimized: true` (required for static
  export). The hero and photo are already compressed for the web, so this is fine.
- If you later need server-side features (ISR, on-the-fly image optimization,
  middleware), switch to the `@cloudflare/next-on-pages` adapter or move to a
  Node host — but this static setup is the simplest for a marketing site.
