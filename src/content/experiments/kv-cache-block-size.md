---
title: "KV Cache Block Size 对吞吐的影响"
description: "比较不同 block size 下的显存浪费、吞吐和首 token 延迟。"
pubDate: 2026-07-17
environment: "8x H100 SXM, CUDA 13, Astro demo placeholder"
scripts: ["experiments/kv-cache/block-size/run.sh", "experiments/kv-cache/block-size/analyze.ipynb"]
data: ["experiments/kv-cache/block-size/raw/*.jsonl"]
conclusion: "block size 需要和请求长度分布一起看，不能只按平均吞吐选择。"
---

## 测试环境

- GPU：8x H100 SXM
- Workload：固定 prefix + 混合输出长度
- 指标：TTFT、TPOT、显存占用、cache hit rate

## 测试脚本

```bash
bash experiments/kv-cache/block-size/run.sh
```

## 原始数据

原始数据建议放在 `experiments/kv-cache/block-size/raw/`，并在文章中只保留摘要表格。

## 实验结论

block size 的选择应该服务于请求长度分布和调度策略，而不是单独追求某个 benchmark 分数。
