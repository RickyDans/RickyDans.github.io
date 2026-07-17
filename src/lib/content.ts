import type { CollectionEntry } from 'astro:content';

export function sortByDate<T extends CollectionEntry<'blog'> | CollectionEntry<'experiments'>>(items: T[]) {
  return [...items].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

export function uniqueBy<T>(items: T[], pick: (item: T) => string) {
  return Array.from(new Map(items.map((item) => [pick(item), item])).values());
}
