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
- Particle backgrounds provide ambient animation (z-20)
- Content sections are layered appropriately for visual hierarchy
- Background images are integrated via Next.js Image component

### Component Patterns

- **Section Components**: Self-contained sections with internal state and animations
- **UI Components**: Reusable shadcn/ui components with consistent styling
- **Utility Functions**: WhatsApp integration and smooth scrolling in `utils/`
- **Animation Strategy**: Framer Motion variants for coordinated entrance animations

### Design System

The project uses OKLCH color space for precise color control with:
- Custom CSS variables for theming
- Gradient-based visual effects
- Consistent shadow and blur patterns
- Responsive breakpoints with `max-sm:` prefix for mobile optimization

### Business Logic Integration

- **WhatsApp Integration**: `utils/whatsapp.ts` handles CTA conversions
- **Section Navigation**: Smooth scroll anchors with ID-based navigation
- **Event Ticketing**: Three-tier pricing structure (Black, Gold, VIP)
- **Speaker Profiles**: Dynamic grid layout with social links

### Path Aliases

Configured in `components.json`:
- `@/components` - Component library
- `@/lib` - Utility functions
- `@/utils` - Business logic utilities
- `@/components/ui` - shadcn/ui components

### Key Features

- **Particle System**: Ambient animation layer across multiple sections
- **Smooth Cursor**: Desktop-only custom cursor effect
- **Testimonial Marquee**: Auto-scrolling social proof
- **Video CTA**: Embedded video with play state management
- **FAQ Accordion**: Collapsible content sections
- **Responsive Design**: Mobile-first with desktop enhancements