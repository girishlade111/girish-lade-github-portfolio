# 🚀 Girish Balaso Lade - Developer Portfolio

A modern, feature-rich portfolio website showcasing projects, GitHub statistics, and open-source contributions. Built with **Next.js 15**, **React 19**, and **TypeScript** for optimal performance and developer experience.

🌐 **Live Demo**: [View Portfolio](https://your-portfolio-url.vercel.app)

---

## ✨ Features

### 🎯 Core Functionality
- **Dynamic Hero Section** with animated typewriter effect showcasing multiple roles:
  - UX/UI Designer
  - AI Agent Builder
  - Open Source Developer
  - Startup Founder
- **Real-time GitHub Integration** - Fetches live data from GitHub API:
  - Total commits (last year)
  - Repository count
  - Stars earned
  - Pull requests & issues
  - Contribution activity
- **Interactive Projects Showcase**:
  - Displays pinned GitHub repositories
  - **Tag-based filtering** - Filter projects by programming languages and topics
  - Live demo links with Globe icon
  - GitHub repository links with External Link icon
  - Real-time stars and forks count
  - **Smart fallback data** when API limits are reached
- **GitHub Contributions Calendar** - Visual representation of coding activity
- **Comprehensive Error Handling**:
  - User-friendly error messages
  - Retry functionality for failed API calls
  - Graceful degradation to fallback data
  - API rate limit detection

### 🎨 Design & UX
- **Modern Dark Theme** with cyan/blue accent colors (#00AEEF)
- **Glass Morphism Effects** - Frosted glass UI components
- **Smooth Animations** powered by Framer Motion:
  - Scroll-triggered animations
  - Hover effects
  - Loading states
  - Floating icons
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Gradient Backgrounds** with radial effects
- **Interactive UI Components** from Radix UI + Shadcn/UI

### 🔧 Technical Features
- **Server & Client Components** - Optimized Next.js 15 App Router architecture
- **API Routes** for GitHub data fetching:
  - `/api/github/repos` - Fetch repository data
  - `/api/github/stats` - Fetch user statistics
- **TypeScript** - Full type safety across the application
- **Tailwind CSS v4** - Modern utility-first styling
- **Font Optimization** with Geist Sans and Geist Mono
- **SEO Optimized** - Semantic HTML and meta tags

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.5 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.552.0
- **UI Components**: Radix UI + Shadcn/UI

### Key Libraries
- **react-github-calendar** - GitHub contribution heatmap
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - Dynamic class merging
- **zod** - Schema validation

### Development Tools
- **Package Manager**: Bun (Fast JavaScript runtime)
- **Linting**: ESLint 9 + Next.js Config
- **PostCSS**: @tailwindcss/postcss

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ or **Bun** runtime installed
- **Git** for version control
- GitHub account (for API integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/girishlade111/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
bun run build
bun run start
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       ├── repos/          # Repository data API
│   │   │       └── stats/          # User statistics API
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Homepage
│   │   └── globals.css             # Global styles + Tailwind
│   │
│   ├── components/
│   │   ├── ui/                     # Shadcn/UI components
│   │   ├── hero-section.tsx        # Hero with typewriter effect
│   │   ├── about-section.tsx       # GitHub stats display
│   │   ├── projects-section.tsx    # Filtered projects showcase
│   │   ├── contributions-section.tsx # GitHub calendar
│   │   ├── social-section.tsx      # Social media links
│   │   └── footer.tsx              # Footer component
│   │
│   └── lib/
│       └── utils.ts                # Utility functions
│
├── public/                         # Static assets
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS config
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

---

## 🔌 API Routes

### `/api/github/repos`
**Fetches repository data for pinned projects**

**Query Parameters**:
- `repos` (string) - Comma-separated list of repository names

**Response**:
```json
{
  "repos": [
    {
      "name": "AetherCanvas",
      "description": "AI-driven design tool",
      "stars": 42,
      "forks": 8,
      "language": "TypeScript",
      "topics": ["nextjs", "ai", "canvas"],
      "html_url": "https://github.com/..."
    }
  ]
}
```

### `/api/github/stats`
**Fetches user GitHub statistics**

**Response**:
```json
{
  "totalCommits": 3842,
  "publicRepos": 614,
  "followers": 156,
  "following": 89
}
```

---

## ⚙️ Configuration

### GitHub API Integration

The portfolio fetches live data from GitHub's API. To customize:

1. **Update GitHub Username**  
   Edit `src/components/contributions-section.tsx`:
   ```typescript
   username="your-github-username"
   ```

2. **Customize Pinned Projects**  
   Edit `src/components/projects-section.tsx`:
   ```typescript
   const projectRepos = [
     "YourRepo1",
     "YourRepo2",
     // Add your repository names
   ];
   ```

3. **Update Fallback Project Data**  
   Modify the `fallbackProjects` array with your project details, including:
   - Project name
   - Description
   - Tags/languages
   - GitHub URL
   - Live demo URL (optional)

### Theme Customization

Edit `src/app/globals.css` to customize colors:

```css
:root {
  --primary: #00AEEF;        /* Accent color */
  --background: #0D1117;     /* Dark background */
  --foreground: #C9D1D9;     /* Text color */
  /* Add more custom properties */
}
```

---

## 🎨 Customization Guide

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add smooth scroll anchor ID if needed

### Modifying Hero Roles
Edit the `roles` array in `hero-section.tsx`:
```typescript
const roles = [
  "Your Role 1",
  "Your Role 2",
  // Add more roles
];
```

### Updating About Statistics
Modify the `stats` array in `about-section.tsx` to showcase your achievements.

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure settings (auto-detected)
5. Deploy! 🎉

### Environment Variables (Optional)

For GitHub API authentication (higher rate limits):

```env
GITHUB_TOKEN=your_github_personal_access_token
```

---

## 📊 Features Breakdown

### Project Filtering System
- **Dynamic Tag Extraction** - Automatically generates filter tags from project topics
- **Multi-Select Filtering** - Filter by multiple tags simultaneously
- **Clear Filters Button** - Quick reset to show all projects
- **Result Counter** - Shows filtered vs. total project count

### Error Handling
- **Rate Limit Detection** - Detects GitHub API rate limits (HTTP 403)
- **404 Handling** - Graceful handling of missing repositories
- **Server Error Handling** - Fallback for GitHub service issues (HTTP 500+)
- **Retry Mechanism** - User-initiated retry with loading state
- **Dismissible Errors** - Non-intrusive error banners

### Performance Optimizations
- **Server Components** - Reduced JavaScript bundle size
- **Lazy Loading** - Components load on scroll
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Geist font with display swap

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Shadcn/UI** - For beautiful, accessible components
- **Framer Motion** - For smooth animations
- **GitHub** - For API access to profile data

---

## 📧 Contact

**Girish Balaso Lade**  
- GitHub: [@girishlade111](https://github.com/girishlade111)
- Website: [Your Portfolio URL]

---

## 🌟 Star this Repository

If you find this portfolio template helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ by Girish Balaso Lade**