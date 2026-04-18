# Development & Deployment Workflow

This repository should follow a simple, reliable workflow so changes are visible only after they pass local validation and the deployment pipeline is known-good.

## Current reality

As of now, two important facts are true:

1. **Local edits are not deployed automatically unless they are committed, pushed, and merged/pushed to `main`.**
2. **The GitHub Actions deploy workflow is currently failing**, so even valid pushes to `main` will not reach production until the deployment configuration is fixed.

## Current deployment setup

Deployment is defined in:
- `.github/workflows/deploy.yml`

Trigger:
- push to `main`

Build command:
- `npm run build`

Deploy target:
- Cloudflare Pages project `yishaik-com`

## Current deploy blocker

The latest workflow failures show the build step succeeds, but the deploy step fails because Wrangler has no Cloudflare API token in the workflow environment.

Observed error:
- `In a non-interactive environment, it's necessary to set a CLOUDFLARE_API_TOKEN environment variable for wrangler to work.`

### Required GitHub repository secrets
These must exist before production deploys can succeed:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Required local validation commands
Before opening a PR or pushing important changes, run:

```bash
npm run check
npm run build
```

Optional during development:

```bash
npm run dev
```

## Branching workflow
Do **not** work directly on `main` for feature changes.

Use:

```bash
git checkout main
git pull --ff-only origin main
git checkout -b feat/<short-description>
```

Examples:
- `feat/curated-repositories`
- `fix/seo-metadata`
- `refactor/homepage-hero`

## Recommended change flow

### 1. Start from updated main
```bash
git checkout main
git pull --ff-only origin main
```

### 2. Create a feature branch
```bash
git checkout -b feat/<name>
```

### 3. Make changes
Use small, focused edits.

### 4. Validate locally
```bash
npm run check
npm run build
```

### 5. Review changed files
```bash
git status --short
git diff --stat
git diff
```

### 6. Commit clearly
```bash
git add <files>
git commit -m "feat: concise description"
```

### 7. Push branch
```bash
git push -u origin HEAD
```

### 8. Open PR
Use GitHub PR workflow instead of pushing feature work straight to `main`.

### 9. Merge only after validation
After review and green checks, merge to `main`.

### 10. Production deployment
Production should be considered updated only after:
- merge to `main`
- successful GitHub Actions deploy
- verification on the live site

## Repository hygiene rules

### Never commit local agent artifacts
Ignored by `.gitignore`:
- `.hermes/`

### Keep generated output uncommitted
Already ignored:
- `dist/`
- `.astro/`
- `node_modules/`

## Definition of done for website changes
A change is done only when all are true:
- local implementation completed
- `npm run check` passes
- `npm run build` passes
- change is committed on a feature branch
- change is pushed and reviewed via GitHub
- merged to `main`
- deploy workflow passes
- live production site is verified

## Immediate next operational task
Before any more production-facing site work, fix the GitHub → Cloudflare deploy path by ensuring the required Cloudflare secrets exist and rerunning the workflow.
