export const site = {
  name: 'Inference Notes',
  description: '大模型推理、KV Cache、CUDA/GPU 通信与云原生推理系统的技术博客。',
  author: 'RickyDans',
  github: 'https://github.com/RickyDans'
};

export const nav = [
  { label: '首页', href: '/' },
  { label: '文章', href: '/blog/' },
  { label: '系列', href: '/series/' },
  { label: '实验', href: '/experiments/' },
  { label: '项目', href: '/projects/' },
  { label: '关于', href: '/about/' },
  { label: '友情链接', href: '/links/' }
];

export const topics = [
  { name: '大模型推理', slug: 'llm-inference', description: '调度、prefill/decode 分离、吞吐与延迟权衡。' },
  { name: 'KV Cache', slug: 'kv-cache', description: 'PagedAttention、复用、淘汰、分层缓存与 benchmark。' },
  { name: 'CUDA / GPU', slug: 'cuda-gpu', description: 'kernel、显存访问、流、图执行和 profiling 方法。' },
  { name: 'RDMA / NCCL / 通信', slug: 'rdma-nccl', description: '跨机通信、集合通信、拓扑和带宽瓶颈定位。' },
  { name: 'vLLM / LMCache / Mooncake', slug: 'runtime', description: '推理运行时源码解析和缓存/传输组件实践。' },
  { name: 'Kubernetes / NVIDIA Dynamo', slug: 'kubernetes-dynamo', description: 'GPU 调度、服务编排、弹性和生产化部署记录。' }
];

export const series = [
  { name: 'vLLM 源码解析', slug: 'vllm-source' },
  { name: 'KV Cache Benchmark', slug: 'kv-cache-benchmark' },
  { name: 'CUDA 通信基础', slug: 'cuda-communication' },
  { name: 'Dynamo 实践记录', slug: 'dynamo-practice' }
];
