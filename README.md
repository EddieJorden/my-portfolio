# Eddie Moger - Modern Portfolio 2.0

> **Outstanding modern portfolio showcasing senior software engineering expertise**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.3-blue.svg)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12.4-purple.svg)](https://www.framer.com/motion/)

## 🚀 Live Site

[EddieMoger.com](https://EddieMoger.com)

## ✨ Features

### Modern Tech Stack
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Framer Motion** - Smooth, professional animations throughout
- **Styled Components** - CSS-in-JS with theme support
- **React TSParticles** - Interactive particle background effects
- **React Intersection Observer** - Scroll-triggered animations

### Design Excellence
- **Glassmorphism UI** - Modern frosted glass aesthetic
- **Dark/Light Mode** - Smooth theme toggle with persistence
- **Gradient Accents** - Eye-catching gradient elements
- **Responsive Design** - Mobile-first, works beautifully on all devices
- **Micro-interactions** - Hover effects, smooth transitions, and delightful details
- **Performance Optimized** - Fast loading, smooth scrolling

### Key Sections
1. **Hero** - Animated introduction with call-to-action
2. **About** - Professional background with stats showcase
3. **Skills** - Core technologies displayed elegantly
4. **Expertise** - Detailed areas of specialization:
   - Modern Web Development (React, Next.js, TypeScript)
   - AI/LLM Integration
   - Multi-Agent Systems
   - Real-Time Applications
   - API Design & Architecture
   - Performance Optimization
5. **Projects** - Portfolio showcasing with hover effects
6. **Contact** - Professional contact form and social links

## 🎨 Design Philosophy

This portfolio embodies modern web design principles:
- **Clarity over complexity** - Clean, focused content
- **Motion with purpose** - Animations enhance, don't distract
- **Professional polish** - Top 1% developer portfolio aesthetic
- **Accessibility** - Semantic HTML, keyboard navigation, focus states
- **Performance** - Optimized assets, lazy loading, efficient rendering

## 🛠️ Tech Stack

```
Frontend:
├── React 18.2.0          - UI library
├── TypeScript 5.0.3      - Type safety
├── Styled Components     - Styling
├── Framer Motion         - Animations
├── React TSParticles     - Particle effects
└── React Router DOM      - Navigation (future expansion)

Development:
├── ESLint               - Code quality
├── Create React App     - Build tooling
└── Git                  - Version control

Deployment:
└── GitHub Pages         - Hosting
```

## 📁 Project Structure

```
eddie-portfolio/
├── public/
│   ├── index.html           # SEO-optimized HTML
│   ├── manifest.json        # PWA manifest
│   └── [images]             # Static assets
├── src/
│   ├── components/
│   │   ├── About/           # About section
│   │   ├── Contact/         # Contact form
│   │   ├── Footer/          # Footer component
│   │   ├── Hero/            # Hero section
│   │   ├── Navigation/      # Navbar with theme toggle
│   │   ├── ParticleBackground/ # Particle effects
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Expertise areas
│   │   └── shared/          # Reusable components (GlassCard, etc.)
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/light mode context
│   ├── styles/
│   │   └── GlobalStyles.ts  # Global CSS
│   ├── theme/
│   │   └── theme.ts         # Theme configuration
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   └── react-app-env.d.ts   # TypeScript declarations
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/EddieJorden/eddie-portfolio.git
cd eddie-portfolio

# Checkout the modern overhaul branch
git checkout feature/modern-overhaul

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn start
# or
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

```bash
# Build for production
yarn build
# or
npm run build

# Deploy to GitHub Pages
yarn deploy
# or
npm run deploy
```

## 🎯 Key Components

### GlassCard
Reusable glassmorphism component with hover effects:
```tsx
<GlassCard hover padding="2rem">
  <h3>Card Title</h3>
  <p>Card content</p>
</GlassCard>
```

### Theme System
Easy dark/light mode toggle with context:
```tsx
const { isDark, toggleTheme, theme } = useTheme();
```

### Animations
Scroll-triggered animations with Framer Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 Theme Customization

Edit `src/theme/theme.ts` to customize colors, gradients, shadows, and more:

```typescript
export const darkTheme: Theme = {
  colors: {
    primary: '#818cf8',
    secondary: '#a78bfa',
    accent: '#f472b6',
    // ... more colors
  },
  gradients: {
    primary: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
    // ... more gradients
  },
  // ... more theme properties
};
```

## 📝 Content Updates

To update portfolio content:

1. **Projects**: Edit `src/components/Projects/Projects.tsx`
2. **Skills**: Edit `src/components/Skills/Skills.tsx`
3. **About**: Edit `src/components/About/About.tsx`
4. **Contact**: Edit `src/components/Contact/Contact.tsx`

## 🔧 Development Scripts

```bash
yarn start          # Start development server
yarn build          # Build for production
yarn test           # Run tests
yarn deploy         # Deploy to GitHub Pages
```

## 🌟 Highlights

### What Makes This Portfolio Stand Out

1. **Professional Design** - Glassmorphism, gradients, and smooth animations
2. **Modern Tech** - React 18, TypeScript, latest best practices
3. **Performance** - Optimized for speed and user experience
4. **Responsive** - Perfect on desktop, tablet, and mobile
5. **Accessible** - Semantic HTML, keyboard navigation, screen reader friendly
6. **SEO Optimized** - Comprehensive meta tags and structured data
7. **Theme Toggle** - Dark/light mode with smooth transitions
8. **Interactive** - Particle effects, hover states, micro-interactions

## 📄 License

This project is private and proprietary to Eddie Moger.

## 👤 Contact

**Eddie Moger**
- Website: [EddieMoger.com](https://EddieMoger.com)
- Email: Eddie@EddieMoger.com
- LinkedIn: [eddie-moger](https://www.linkedin.com/in/eddie-moger/)
- GitHub: [EddieJorden](https://github.com/EddieJorden)

---

**Built with ❤️ using React, TypeScript, and Framer Motion**

*Making the world a better place, one line of code at a time.*
