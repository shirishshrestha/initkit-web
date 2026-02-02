# InitKit Website

**Modern, responsive showcase for InitKit CLI tool**

Built with Next.js 16, React Bits components, and the Chillax typeface.

## 🎨 Design System

### Typography

- **Primary Font**: Chillax (variable font with weights 200-700)
- **Monospace**: Fira Code for code snippets
- **Responsive**: Fluid typography scales across devices

### Components (React Bits)

#### Implemented Components

- **Falling Text** - Animated hero headline with word-by-word reveal
- **Magic Bento** - Responsive grid layout with spotlight effects
- **Laser Flow** - Animated SVG background with flowing lines and particles
- **Shiny Text** - Gradient text animation for emphasis
- **Variable Proximity** - Scale effect on hover based on mouse distance
- **Spotlight Card** - Cards with dynamic mouse-following spotlight

### Color Palette

- **Primary**: Cyan (#06b6d4) for interactive elements
- **Background**: Zinc-950 to Black gradient
- **Text**: White to Zinc-400 hierarchy
- **Accents**: Cyan, Green, Purple, Blue, Orange, Red for feature categories

## 🚀 Features

### Home Page

- Animated hero section with Falling Text
- Interactive copy-to-clipboard for CLI command
- Laser Flow visual separator
- Magic Bento grid with 9 feature cards
- Fully responsive (mobile/tablet/desktop)
- Smooth scroll animations with Framer Motion

### Documentation Page

- Sticky sidebar navigation
- 5 comprehensive sections:
  - Getting Started
  - Features
  - Frameworks
  - CLI Reference
  - Usage Examples
- Animated section transitions
- Syntax-highlighted code blocks
- Mobile-friendly collapsible navigation
- Breadcrumb navigation

### Navigation

- Fixed floating navbar with backdrop blur
- Smooth spring animations on mount
- Active route highlighting
- Responsive design

## 📱 Responsiveness

All components are fully responsive with breakpoints:

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Mobile Optimizations

- Bento grid stacks vertically on mobile
- Hero text scales fluidly (4xl → 7xl)
- Navigation collapses appropriately
- Touch-friendly interactive elements
- Optimized font loading with font-display: swap

## 🛠️ Technical Stack

```json
{
  "framework": "Next.js 16.1.6",
  "react": "19.2.4",
  "styling": "Tailwind CSS 4.1.18",
  "animations": "Framer Motion 12.29.2",
  "icons": "Lucide React 0.563.0",
  "typescript": "5.9.3"
}
```

## 📂 Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Font faces + Tailwind
│   │   ├── layout.tsx           # Root layout with Chillax
│   │   ├── page.tsx             # Home page
│   │   └── docs/
│   │       └── page.tsx         # Documentation page
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx         # Hero with Falling Text
│   │   │   └── features.tsx     # Magic Bento features
│   │   └── ui/
│   │       ├── falling-text.tsx # React Bits component
│   │       ├── magic-bento.tsx  # React Bits component
│   │       ├── laser-flow.tsx   # React Bits component
│   │       ├── shiny-text.tsx   # React Bits component
│   │       ├── navbar.tsx       # Navigation
│   │       ├── footer.tsx       # Footer
│   │       ├── terminal.tsx     # Terminal animation
│   │       └── spotlight-card.tsx
│   └── lib/
│       └── utils.ts             # cn() utility
└── public/
    └── fonts/
        └── Chillax_Complete/    # Local font files
```

## 🎯 Documentation Parity

Website docs mirror NPM package README.md content with enhanced UI:

- All 865 lines of NPM README covered
- Interactive examples
- Visual feature showcase
- Searchable sections
- Code syntax highlighting
- Mobile-optimized reading experience

## 🚢 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔗 Links

- **Live Site**: [initkit.shirishshrestha.com.np/](https://initkit.shirishshrestha.com.np/)
- **GitHub**: [github.com/shirishshrestha/initkit-web](https://github.com/shirishshrestha/initkit-web)
- **NPM Package**: [npmjs.com/package/initkit](https://www.npmjs.com/package/initkit)

## 📊 Performance

- **Lighthouse Score**: 100 (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Font Loading**: Optimized with font-display: swap
- **Images**: Next.js Image optimization
- **Code Splitting**: Automatic with Next.js

## ✨ Animations

All animations use Framer Motion for:

- Smooth 60fps performance
- Hardware acceleration
- Reduced motion support
- Viewport-based triggers
- Exit animations

## 🎨 Chillax Font

- **Format**: Variable font (WOFF2, WOFF)
- **Weights**: 200 (Extralight) to 700 (Bold)
- **Fallback**: system-ui, sans-serif
- **Loading**: swap for immediate text rendering

## 📝 License

MIT © [Shirish Shrestha](https://github.com/shirishshrestha)

---

**Made with ❤️ using React Bits components and the Chillax typeface**
