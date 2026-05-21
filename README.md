# Aayulogic Platform

A premium, high-fidelity homepage for Aayulogic—a digital transformation partner specializing in AI, cloud infrastructure, enterprise platforms, and cybersecurity.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Components**: shadcn/ui primitives
- **Motion**: Framer Motion 11
- **Deployment**: Cloudflare Pages (OpenNext)

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── header.tsx           # Sticky navigation with mega menu
│   ├── hero-section.tsx     # 60/40 hero with dashboard
│   ├── trust-marquee.tsx    # Client logo carousel
│   ├── metrics-grid.tsx     # Performance metrics
│   ├── about-section.tsx    # Company narrative
│   ├── services-grid.tsx    # 5-column capabilities
│   ├── case-studies.tsx     # Portfolio showcases
│   ├── blog-section.tsx     # Thought leadership
│   ├── cta-section.tsx      # Conversion terminal
│   └── footer.tsx           # Footer with links
├── lib/
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # Content & data
└── globals.css              # Global styles & animations
```

## Design System

### Colors
- **Primary**: `#045BB4` (Trust Blue)
- **Neutral**: `#0A192F` (Deep Slate Navy)
- **Accent**: `#00F2FE` (Digital Cyan) → `#4FACFE` (System Blue)
- **Base**: `#FFFFFF`, `#F8FAFC`

### Components
- All interactive elements use `rounded-md` (6px radius)
- Glass cards feature 20px blur with precise 1px borders
- Motion uses industrial ease curve: `[0.16, 1, 0.3, 1]`
- Duration: 0.5s for all primary transitions

### Typography
- **Font**: Plus Jakarta Sans (display) + Inter (body)
- **Scale**: 5xl hero, 4xl section, lg body

## Building for Production

### Standard Build

```bash
npm run build
npm start
```

### Cloudflare Pages Build

```bash
npm run cloudflare:build
```

This generates a Worker-compatible bundle for edge deployment.

## Key Features

✅ **Enterprise Glassmorphism** – Precision light-frosting cards
✅ **Mega Menu Navigation** – 5-column services taxonomy
✅ **Animated Dashboard** – Live metrics with staggered reveals
✅ **Logo Marquee** – Infinite hover-activated client scroll
✅ **Case Study Grids** – Portfolio with tech tags & metrics
✅ **Conversion Terminal** – Full-width CTA with scheduling
✅ **Performance Optimized** – Image optimization, lazy loading, edge caching ready
✅ **Mobile-First** – Responsive breakpoints, touch-friendly interactions
✅ **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation

## Customization

### Adding Content

Edit `/src/lib/constants.ts` to modify:
- Services/capabilities
- Case studies
- Blog posts
- Metrics
- Client logos

### Updating Colors

Modify the color palette in `tailwind.config.ts`:

```ts
colors: {
  "brand-blue": "#045BB4",
  "brand-navy": "#0A192F",
  // ... etc
}
```

### Adjusting Motion

Modify `motionConfig` in `/src/lib/utils.ts` to change:
- Transition duration
- Easing curves
- Animation delays

## Deployment

### Cloudflare Pages

1. Connect your Git repository
2. Set build command: `npm run cloudflare:build`
3. Set output directory: `.open-next/static`
4. Deploy!

### Vercel

Standard Next.js deployment—no special configuration needed.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Tips

- Use Chrome DevTools to audit Core Web Vitals
- Enable image optimization with `next/image`
- Leverage Framer Motion's GPU acceleration
- Consider ISR for static pages with occasional updates
- Use Cloudflare's edge caching for assets

## License

MIT

## Support

For questions or feedback, reach out to hello@aayulogic.com
