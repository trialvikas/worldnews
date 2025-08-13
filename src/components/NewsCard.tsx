import { NewsArticle } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Unknown date';
    }
  };

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
      {article.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dadb76c-7e71-4a2c-b748-55f4eb7e7623.png";
            }}
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {article.source}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(article.pubDate)}
          </span>
        </div>
        
        <CardTitle className="text-lg leading-tight line-clamp-2 hover:text-primary transition-colors">
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            {article.title}
          </a>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        {article.description && (
          <CardDescription className="text-sm text-muted-foreground mb-4 flex-1">
            {truncateDescription(article.description)}
          </CardDescription>
        )}
        
        <div className="mt-auto">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read Full Article
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
