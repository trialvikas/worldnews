# Geopolitics News Hub 🌍

A modern, real-time news aggregator focused on geopolitics, international conflicts, and global economic affairs. Built with Next.js 15+ and designed for easy deployment to GitHub and Vercel.

![Geopolitics News Hub](https://placehold.co/1200x600?text=Geopolitics+News+Hub+Modern+News+Aggregator+Interface)

## 🚀 Features

- **Real-time News Aggregation**: Fetches latest news from multiple trusted sources
- **No API Keys Required**: Completely free to use and deploy
- **Focused Content**: Specializes in geopolitics, conflicts, and international relations
- **Modern UI**: Clean, responsive design with shadcn/ui components
- **Fast Performance**: Built with Next.js 15+ and Turbopack
- **Mobile Responsive**: Optimized for all device sizes
- **Easy Deployment**: Ready for GitHub and Vercel deployment

## 📰 News Sources

### Traditional Media
- **BBC World News** - International news and analysis
- **Reuters** - Global news and financial information
- **NPR World News** - In-depth international reporting
- **CNN International** - Breaking news and current affairs

### Community Sources
- **Reddit Geopolitics** - Expert discussions and analysis
- **Reddit World News** - Community-driven news sharing

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **News Parsing**: RSS Parser for feed aggregation
- **Deployment**: Optimized for Vercel and GitHub Pages

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/geopolitics-news-hub.git
   cd geopolitics-news-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Deploy to Other Platforms

The app is also compatible with:
- **Netlify**: Static site deployment
- **GitHub Pages**: With static export
- **Railway**: Full-stack deployment
- **Render**: Web service deployment

## 📁 Project Structure

```
geopolitics-news-hub/
├── src/
│   ├── app/
│   │   ├── api/news/          # News aggregation API
│   │   ├── news/              # News page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── NewsCard.tsx       # Individual news article card
│   │   └── NewsList.tsx       # News articles grid
│   └── lib/
│       ├── types.ts           # TypeScript definitions
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🔧 Configuration

### Adding New News Sources

To add new RSS feeds, edit `src/app/api/news/route.ts`:

```typescript
const RSS_SOURCES = [
  {
    url: 'https://your-rss-feed-url.com/rss.xml',
    source: 'Your Source Name'
  },
  // ... existing sources
];
```

### Customizing the UI

The app uses Tailwind CSS and shadcn/ui components. Customize:
- **Colors**: Edit Tailwind config or CSS variables
- **Components**: Modify files in `src/components/`
- **Layout**: Update `src/app/layout.tsx`

## 🌐 API Endpoints

### GET `/api/news`

Fetches aggregated news articles from all configured sources.

**Response:**
```json
{
  "articles": [
    {
      "source": "BBC World News",
      "title": "Article Title",
      "link": "https://...",
      "pubDate": "2024-01-13T08:00:00Z",
      "description": "Article description...",
      "imageUrl": "https://..."
    }
  ],
  "totalCount": 50,
  "lastUpdated": "2024-01-13T08:00:00Z"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **News Sources**: BBC, Reuters, NPR, CNN for providing RSS feeds
- **shadcn/ui**: For the excellent component library
- **Next.js Team**: For the amazing framework
- **Vercel**: For seamless deployment platform

## 📞 Support

If you have any questions or need help with deployment, please open an issue on GitHub.

---

**Built with ❤️ for the global affairs community**
