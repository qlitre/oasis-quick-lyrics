# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hono-based web application called "oasis-quick-lyrics" that runs on Cloudflare Workers. It uses Server-Side Rendering (SSR) with Hono's JSX renderer and Vite for development and building.

## Architecture

- **Framework**: Hono v4.9.6 - A lightweight web framework for edge computing
- **Runtime**: Cloudflare Workers (configured in wrangler.jsonc)
- **JSX**: Uses Hono's built-in JSX with `jsxImportSource: "hono/jsx"`
- **SSR**: Server-side rendering with `vite-ssr-components`
- **Build Tool**: Vite with Cloudflare plugin
- **Package Manager**: Yarn (yarn.lock present)

### Key Files

- `src/index.tsx` - Main application entry point, defines Hono routes
- `src/renderer.tsx` - JSX renderer configuration for HTML shell
- `src/style.css` - Application styles
- `wrangler.jsonc` - Cloudflare Workers configuration
- `vite.config.ts` - Vite build configuration with Cloudflare and SSR plugins

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare Workers
npm run deploy

# Generate Cloudflare types
npm run cf-typegen
```

## TypeScript Configuration

- Uses ESNext target and module resolution
- JSX configured for Hono with `jsx: "react-jsx"` and `jsxImportSource: "hono/jsx"`
- Strict mode enabled
- When working with Cloudflare bindings, use the CloudflareBindings interface as generics: `new Hono<{ Bindings: CloudflareBindings }>()`

## Routing and Rendering

The app uses Hono's routing system with JSX rendering:
- Routes are defined in `src/index.tsx`
- The renderer middleware in `src/renderer.tsx` provides the HTML shell
- Use `c.render()` to render JSX components in route handlers
- Static assets are served from the `public/` directory