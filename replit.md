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
├── index.html         # HTML template
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

## Notes
- Uses HashRouter for client-side routing (suitable for static hosting)
- Tailwind CSS loaded via CDN in index.html
- FOUC prevention implemented (root element hidden until React loads)
- All components use TypeScript with React.FC typing
