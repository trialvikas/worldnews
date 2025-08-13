import { NextResponse } from 'next/server';
import RSSParser from 'rss-parser';
import { NewsArticle } from '@/lib/types';

const parser = new RSSParser();

// RSS Feed sources focused on geopolitics, conflicts, and world news
const RSS_SOURCES = [
  {
    url: 'http://feeds.bbci.co.uk/news/world/rss.xml',
    source: 'BBC World News'
  },
  {
    url: 'http://feeds.reuters.com/Reuters/worldNews',
    source: 'Reuters World News'
  },
  {
    url: 'https://feeds.npr.org/1004/rss.xml',
    source: 'NPR World News'
  },
  {
    url: 'https://rss.cnn.com/rss/edition.rss',
    source: 'CNN International'
  }
];

// Reddit sources for geopolitics discussions
const REDDIT_SOURCES = [
  {
    url: 'https://www.reddit.com/r/geopolitics/.json?limit=10',
    source: 'Reddit Geopolitics'
  },
  {
    url: 'https://www.reddit.com/r/worldnews/.json?limit=10',
    source: 'Reddit World News'
  }
];

// Define types for Reddit API response
interface RedditPost {
  data: {
    title: string;
    permalink: string;
    created_utc: number;
    selftext: string;
    thumbnail: string;
    stickied: boolean;
    score: number;
  };
}

interface RedditResponse {
  data: {
    children: RedditPost[];
  };
}

async function fetchRSSFeed(feedUrl: string, sourceName: string): Promise<NewsArticle[]> {
  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items.slice(0, 10).map(item => ({
      source: sourceName,
      title: item.title || 'No title',
      link: item.link || '#',
      pubDate: item.pubDate || new Date().toISOString(),
      description: item.contentSnippet || item.content || '',
      imageUrl: item.enclosure?.url || undefined
    }));
  } catch (error) {
    console.error(`Error fetching RSS from ${sourceName}:`, error);
    return [];
  }
}

async function fetchRedditPosts(redditUrl: string, sourceName: string): Promise<NewsArticle[]> {
  try {
    const response = await fetch(redditUrl, {
      headers: {
        'User-Agent': 'NewsApp/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: RedditResponse = await response.json();
    
    return data.data.children
      .filter((post: RedditPost) => !post.data.stickied && post.data.score > 50)
      .slice(0, 8)
      .map((post: RedditPost) => ({
        source: sourceName,
        title: post.data.title,
        link: `https://reddit.com${post.data.permalink}`,
        pubDate: new Date(post.data.created_utc * 1000).toISOString(),
        description: post.data.selftext ? post.data.selftext.substring(0, 200) + '...' : '',
        imageUrl: post.data.thumbnail && post.data.thumbnail.startsWith('http') ? post.data.thumbnail : undefined
      }));
  } catch (error) {
    console.error(`Error fetching Reddit from ${sourceName}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    // Fetch from RSS sources
    const rssPromises = RSS_SOURCES.map(source => 
      fetchRSSFeed(source.url, source.source)
    );
    
    // Fetch from Reddit sources
    const redditPromises = REDDIT_SOURCES.map(source => 
      fetchRedditPosts(source.url, source.source)
    );
    
    // Wait for all sources to complete
    const [rssResults, redditResults] = await Promise.all([
      Promise.all(rssPromises),
      Promise.all(redditPromises)
    ]);
    
    // Flatten and combine all articles
    const allArticles: NewsArticle[] = [
      ...rssResults.flat(),
      ...redditResults.flat()
    ];
    
    // Sort by publication date (newest first)
    const sortedArticles = allArticles.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
    
    // Limit to 50 articles to keep response size manageable
    const limitedArticles = sortedArticles.slice(0, 50);
    
    return NextResponse.json({ 
      articles: limitedArticles,
      totalCount: limitedArticles.length,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news articles' },
      { status: 500 }
    );
  }
}
