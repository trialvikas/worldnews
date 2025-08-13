export interface NewsArticle {
  source: string;
  title: string;
  link: string;
  pubDate: string; // ISO date string
  description?: string;
  imageUrl?: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
}
