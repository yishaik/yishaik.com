# Content editor (`/admin`) — one-time setup

Your site now has a built-in content editor powered by **Sveltia CMS** (a
modern, Git-based CMS). You edit text/links in a friendly UI, hit **Publish**,
and the change is committed to GitHub → the site auto-rebuilds → live in ~30–60s.

Everything is already wired **except** GitHub login, which needs two ~5-minute
steps you do once (they require your GitHub + Cloudflare accounts).

---

## Step 1 — Deploy the GitHub login helper (Cloudflare Worker)

The editor needs a tiny auth relay so GitHub login works on our own domain.

1. Go to **https://github.com/sveltia/sveltia-cms-auth** and click the
   **“Deploy to Cloudflare”** button (or `git clone` it and run `npx wrangler deploy`).
2. Deploy it to **your** Cloudflare account. When it finishes, copy the Worker URL —
   it looks like `https://sveltia-cms-auth.<your-subdomain>.workers.dev`.

## Step 2 — Create a GitHub OAuth app

1. Open **https://github.com/settings/applications/new**
2. Fill in:
   - **Application name:** `yishaik.com CMS`
   - **Homepage URL:** `https://yishaik.com`
   - **Authorization callback URL:** `<YOUR_WORKER_URL>/callback`
     (e.g. `https://sveltia-cms-auth.<your-subdomain>.workers.dev/callback`)
3. Click **Register application**, then **Generate a new client secret**.
4. Copy the **Client ID** and **Client secret**.

## Step 3 — Give the Worker its secrets

In the Cloudflare dashboard → **Workers & Pages → `sveltia-cms-auth` → Settings → Variables**, add:

| Variable | Value |
|---|---|
| `GITHUB_CLIENT_ID` | the Client ID from Step 2 |
| `GITHUB_CLIENT_SECRET` | the Client secret (mark as **Encrypted**) |
| `ALLOWED_DOMAINS` | `yishaik.com` |

Save & deploy.

## Step 4 — Point the editor at the Worker

Edit **`public/admin/config.yml`**, line `base_url:`, and replace the placeholder
with your Worker URL (no trailing slash, no `/callback`):

```yaml
backend:
  name: github
  repo: yishaik/yishaik.com
  branch: main
  base_url: https://sveltia-cms-auth.<your-subdomain>.workers.dev
```

Commit & push (or ask Claude to do it). Done.

---

## Using it

1. Go to **https://yishaik.com/admin**
2. Click **Login with GitHub** and authorize.
3. Pick a section (Hero, About, Experience, Skills, Contact, General), edit the
   English/Hebrew fields, upload logos, then click **Publish → Publish now**.
4. The change commits to `main`; the site redeploys automatically and is live in
   under a minute. Every edit is versioned in Git, so anything can be undone.

> Tip: you can also open the editor on your phone — it works in a mobile browser.
