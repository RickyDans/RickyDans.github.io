# Deployment

This blog is a static Astro site. It can be deployed to Cloudflare Pages, Cloudflare Workers, or GitHub Pages.

## Required variables

- `SITE_URL`: your final public URL, for example `https://blog.example.com`.
- `BASE_PATH`: only needed for GitHub project pages such as `/repo-name`. Leave it empty for a custom domain or `username.github.io`.

## Cloudflare Pages

1. Push this project to GitHub.
2. In Cloudflare, create a Pages project and connect the repository.
3. Use these build settings:
   - Framework preset: Astro
   - Build command: `pnpm run build`
   - Output directory: `dist`
4. Add `SITE_URL` as an environment variable.
5. Add your custom domain in the Pages project settings and point DNS to Cloudflare.

## Cloudflare Workers

This project also includes `wrangler.jsonc` for static asset deployment.

```bash
pnpm run build
npx wrangler deploy
```

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` uses Astro's official GitHub Action.

1. Push to the `main` branch.
2. In GitHub repository settings, set Pages source to GitHub Actions.
3. Add repository variable `SITE_URL`.
4. If using a project page without a custom domain, add `BASE_PATH` with `/repo-name`.
5. For a custom domain, copy `public/CNAME.example` to `public/CNAME` and replace the domain.
