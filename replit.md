# Firetech Trading Contracting W.L.L

## Overview
This is a corporate website for Firetech Trading Contracting W.L.L, a company specializing in fire protection, HVAC, and construction services. The application is built with React, TypeScript, and Vite.

**Current State:** Fully configured and running in Replit environment on port 5000

## Project Information
- **Project Type:** React + TypeScript + Vite frontend application
- **Original Source:** Imported from GitHub (AI Studio app)
- **Setup Date:** October 18, 2025

## Technology Stack
- **Frontend Framework:** React 19.2.0
- **Routing:** React Router 6.25.1
- **Build Tool:** Vite 6.2.0
- **Language:** TypeScript 5.8.2
- **Styling:** Tailwind CSS (loaded via CDN)
- **Package Manager:** npm

## Project Structure
```
/
├── components/          # React components
│   ├── About.tsx
│   ├── AnimatedSection.tsx  # Reusable scroll animation wrapper
│   ├── Brands.tsx
│   ├── Certificates.tsx
│   ├── Clients.tsx
│   ├── Contact.tsx
│   ├── CoreValues.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Icons.tsx
│   ├── Layout.tsx
│   ├── Services.tsx
│   ├── VisionMission.tsx
│   └── WhyChooseUs.tsx
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.tsx  # Intersection Observer hook for scroll animations
├── pages/              # Page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   └── WhyUsPage.tsx
├── Images/             # Static assets
│   └── firetech_logo.png
├── App.tsx            # Main app component with routing
├── index.tsx          # Entry point
├── index.html         # HTML template with SEO meta tags and animation keyframes
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies
```

## Pages
1. **Home** (`/`) - Hero section, services overview, why choose us, brands, clients, contact
2. **About** (`/about`) - Company information
3. **Services** (`/services`) - Detailed service offerings
4. **Why Us** (`/why-us`) - Company advantages
5. **Contact** (`/contact`) - Contact information and form

## Recent Changes
**October 22, 2025 - Dramatic Scroll Animations & SEO Enhancement**
- Implemented professional scroll-triggered animations for all components
- Created custom `useScrollAnimation` hook using Intersection Observer API for performance
- Created reusable `AnimatedSection` wrapper component for consistent animation effects
- Enhanced animations with dramatic pop-up effects:
  - Elements start invisible (opacity: 0) and scaled down
  - Elements dramatically pop up when scrolling into view with bounce/elastic effects
  - Using cubic-bezier(0.34, 1.56, 0.64, 1) for smooth, professional animations
  - Variety of animations: fade-in-up, slide-in-left/right, flip-in, rotate-in, scale-in, zoom-in
  - Staggered delays for sequential reveal effects (100-500ms intervals)
- Updated all major components with scroll animations:
  - About.tsx: slide-in-left (image) + fade-in-up (text)
  - Services.tsx: flip-in, rotate-in, scale-in for service cards with staggered delays
  - WhyChooseUs.tsx: slide-in-left (content) + fade-in-right (features with stagger)
  - Clients.tsx: fade-in-left (text) + slide-in-right (image)
  - Contact.tsx: fade-in-up (header) + slide-in-left/right (form sections)
  - Brands.tsx: fade-in-up (header) + slide-up (brand carousel)
- SEO & Accessibility Improvements:
  - Added semantic HTML tags (article, header, section, address)
  - Implemented ARIA labels (aria-labelledby, aria-required, aria-hidden)
  - Enhanced all image alt texts with descriptive, SEO-friendly descriptions
  - Added proper heading hierarchy with id attributes for screen readers
  - Improved form accessibility with aria-required attributes
  - Added loading="lazy" to images for performance optimization
  - Added width/height attributes to images for better Core Web Vitals

**October 18, 2025 - Mobile Responsiveness Fix**
- Fixed mobile layout issues where images were displaying at full size and breaking the layout
- Updated three components with proper mobile image constraints:
  - `About.tsx`: Added max-height (384px), max-width (28rem on mobile), and object-contain for fire extinguisher image
  - `Clients.tsx`: Added max-height (384px), max-width (28rem on mobile), and object-cover for Qatar skyline image
  - `WhyChooseUs.tsx`: Added max-height (320px), max-width (28rem on mobile), and object-cover for fire equipment image
- All fixes maintain full-size display on desktop (md breakpoint and above)
- Configured deployment settings for production (autoscale with build and preview commands)

**October 18, 2025 - Initial Replit Setup**
- Installed Node.js 20 and npm dependencies
- Updated Vite configuration:
  - Changed port from 3000 to 5000 (Replit requirement)
  - Added `allowedHosts: true` for Replit proxy compatibility
  - Fixed `__dirname` for ES modules using `fileURLToPath`
- Created workflow "Server" running `npm run dev` on port 5000
- Created .gitignore (already existed)
- Application successfully running with all components rendering

## Configuration Details

### Vite Configuration
- **Port:** 5000 (required for Replit)
- **Host:** 0.0.0.0 (allows external connections)
- **Allowed Hosts:** true (enables Replit proxy to work)
- **Path Alias:** `@` points to project root

### Workflow
- **Name:** Server
- **Command:** `npm run dev`
- **Port:** 5000
- **Output:** webview

## Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server (port 5000)
npm run build       # Build for production
npm run preview     # Preview production build
```

## Environment Variables
The original project mentions `GEMINI_API_KEY` in the README and vite config, but this appears to be for a different version. The current codebase is a static website and doesn't use any API keys.

## Features
- **Scroll Animations:** Professional scroll-triggered animations using Intersection Observer API
- **SEO Optimized:** Comprehensive meta tags, semantic HTML, ARIA labels, and structured data
- **Responsive Design:** Mobile-first approach with proper image constraints
- **Performance:** Lazy loading images, optimized animations, efficient re-renders
- **Accessibility:** ARIA labels, semantic HTML, keyboard navigation support

## Notes
- Uses HashRouter for client-side routing (suitable for static hosting)
- Tailwind CSS loaded via CDN in index.html (consider migrating to PostCSS for production)
- FOUC prevention implemented (root element hidden until React loads)
- All components use TypeScript with React.FC typing
- Animations use cubic-bezier easing for smooth, elastic effects
- Intersection Observer provides better performance than scroll event listeners
