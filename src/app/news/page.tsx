import { NewsList } from '@/components/NewsList';
import { Separator } from '@/components/ui/separator';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Geopolitics News
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest developments in global politics, conflicts, 
              international relations, and economic affairs from trusted sources worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-secondary rounded-full">Geopolitics</span>
              <span className="px-3 py-1 bg-secondary rounded-full">International Conflicts</span>
              <span className="px-3 py-1 bg-secondary rounded-full">World Economics</span>
              <span className="px-3 py-1 bg-secondary rounded-full">Global Affairs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* News Sources Info */}
          <div className="mb-8 p-4 bg-muted/50 rounded-lg border">
            <h2 className="text-lg font-semibold mb-2">News Sources</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Our news aggregator pulls from multiple reliable sources to provide comprehensive coverage:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="space-y-1">
                <h3 className="font-medium">Traditional Media</h3>
                <ul className="text-muted-foreground space-y-0.5">
                  <li>• BBC World News</li>
                  <li>• Reuters</li>
                  <li>• NPR World</li>
                  <li>• CNN International</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Community Sources</h3>
                <ul className="text-muted-foreground space-y-0.5">
                  <li>• Reddit Geopolitics</li>
                  <li>• Reddit World News</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Focus Areas</h3>
                <ul className="text-muted-foreground space-y-0.5">
                  <li>• International Relations</li>
                  <li>• Armed Conflicts</li>
                  <li>• Economic Policy</li>
                  <li>• Diplomatic Affairs</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Update Frequency</h3>
                <ul className="text-muted-foreground space-y-0.5">
                  <li>• Real-time RSS feeds</li>
                  <li>• Manual refresh available</li>
                  <li>• 50 latest articles</li>
                  <li>• Multiple time zones</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* News List Component */}
          <NewsList />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              This news aggregator provides information from various public sources. 
              Please verify important information through original sources.
            </p>
            <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
              <span>Free & Open Source</span>
              <span>•</span>
              <span>No API Keys Required</span>
              <span>•</span>
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Geopolitics News - Latest Global Affairs & International Relations',
  description: 'Stay updated with the latest geopolitical developments, international conflicts, and global economic affairs from trusted news sources worldwide.',
  keywords: 'geopolitics, international relations, world news, conflicts, global affairs, economics, diplomacy',
};
