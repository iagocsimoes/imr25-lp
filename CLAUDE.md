# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for fast builds)
- **Production build**: `npm run build`
- **Production start**: `npm start`
- **Linting**: `npm run lint`
- **Code formatting**: Project includes Prettier with Tailwind plugin configured

## Project Architecture

This is a Next.js 15 landing page for a business event/conference in Portuguese (pt-BR), featuring premium animations and modern UI patterns.

### Core Technologies
- **Framework**: Next.js 15 with App Router and React 19
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui (New York style variant)
- **Animations**: Framer Motion for scroll animations and transitions
- **3D Graphics**: Three.js with @react-three/fiber
- **Icons**: Lucide React
- **Typography**: SK-Modernist font (loaded from CDN)

### High-Level Architecture

The application follows a single-page architecture with distinct visual layers:

1. **Background Layer**: Static and animated backgrounds (BackgroundPaths, ParticlesBackground)
2. **Content Layer**: Main sections with z-index stacking
3. **Interactive Layer**: UI overlays and cursor effects (desktop only)

### Page Composition Strategy

The main page (`app/page.tsx`) orchestrates sections with specific z-index management:
- Hero section and header have highest priority (z-50)
- Multiple ParticlesBackground instances create depth across different sections
- Content sections are layered appropriately for visual hierarchy
- Background images are integrated via Next.js Image component with overlay gradients

### Component Patterns

- **Section Components**: Self-contained sections with internal state and animations
- **UI Components**: Reusable shadcn/ui components with consistent styling
- **Context Management**: TicketModalProvider for global modal state
- **Animation Strategy**: Framer Motion variants for coordinated entrance animations with staggerChildren
- **Utility Functions**: WhatsApp integration and smooth scrolling in `utils/`

### Design System

The project uses OKLCH color space for precise color control with:
- Custom CSS variables for theming
- Gradient-based visual effects with mix-blend modes
- Consistent shadow and blur patterns
- Responsive breakpoints with `max-sm:` prefix for mobile optimization
- Dark theme with slate-950 base and red-600 accent colors

### Business Logic Integration

- **WhatsApp Integration**: `utils/whatsapp.ts` handles CTA conversions
- **Section Navigation**: Smooth scroll anchors with ID-based navigation
- **Event Ticketing**: Three-tier pricing structure (Black, Gold, VIP)
- **Modal System**: useTicketModal hook with context provider pattern
- **Speaker Profiles**: Dynamic grid layout with social links

### Path Aliases

Configured in `components.json`:
- `@/components` - Component library
- `@/lib` - Utility functions
- `@/utils` - Business logic utilities
- `@/components/ui` - shadcn/ui components
- `@/hooks` - Custom React hooks
- `@/contexts` - React context providers

### Key Features

- **Particle System**: Multiple layered instances creating depth across sections
- **Smooth Cursor**: Desktop-only custom cursor effect
- **Testimonial Marquee**: Auto-scrolling social proof component
- **Video CTA**: Embedded video with play state management
- **FAQ Accordion**: Collapsible content sections
- **Responsive Design**: Mobile-first with desktop enhancements
- **Metrics Display**: Animated counter components with viewport triggers
- **Bento Grid**: Flexible grid layout for feature showcase