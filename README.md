# Inference Notes

Astro + Markdown/MDX technical blog for inference systems notes.

## Features

- Markdown / MDX articles with typed content collections.
- Blog categories for LLM inference, KV Cache, CUDA/GPU, RDMA/NCCL, runtime projects, and Kubernetes/Dynamo.
- Series pages for long-running writing tracks.
- Experiments section for environment, scripts, raw data, and conclusions.
- Projects, About, Links, and RSS.
- GitHub Pages workflow and Cloudflare static deployment config.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Writing

Add blog posts under `src/content/blog/`. Nested folders become nested routes, for example:

```text
src/content/blog/kv-cache/paged-attention-kv-cache.mdx
```

becomes:

```text
/blog/kv-cache/paged-attention-kv-cache/
```

Deployment notes are in `docs/deploy.md`.
