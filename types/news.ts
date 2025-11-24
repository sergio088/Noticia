// types/news.ts
export interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  videoUrl?: string;
  thumbnail?: string;
}
