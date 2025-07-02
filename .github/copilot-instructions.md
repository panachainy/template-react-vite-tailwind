# Copilot Instructions for React Vite Tailwind Template

## Project Overview
This is a modern React template project built with Vite, TypeScript, Tailwind CSS, and comprehensive testing setup. It serves as a foundation for building scalable React web applications with excellent developer experience, performance, and maintainability.
We use bun & bunx for package management and script execution, ensuring fast installs and efficient builds.

## Code Style Guidelines
- Follow TypeScript best practices with strict type checking
- Use explicit return types for all functions
- Use meaningful variable and function names
- Write clear, concise comments for complex logic
- Prefer functional components over class components
- Use React hooks for state management and side effects
- Follow React component composition patterns
- Use Biome for code formatting and linting

## Project Structure
- `/src` - Main application source code
- `/src/pages` - Page components organized by feature/route
- `/src/components` - Reusable UI components
- `/src/core` - Core application components (Navbar, Error, etc.)
- `/src/layouts` - Layout components for page structure
- `/src/providers` - React context providers
- `/src/utils` - Utility functions and helpers
- `/src/assets` - Static assets (images, icons, etc.)
- `/e2e` - End-to-end tests with Playwright
- `/public` - Public static files
- `/coverage` - Test coverage reports

## Architecture Pattern
Each feature/page follows a modular structure:
- `pages/[Feature]/` - Feature-specific pages and components
- `pages/[Feature]/interfaces/` - TypeScript interfaces and types
- `pages/[Feature]/[FeatureName].tsx` - Main feature component
- `components/` - Shared reusable components
- `layouts/` - Page layout wrappers
- `providers/` - Context providers for global state

## Dependencies
- **React 19** - UI library with latest features
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **Axios** - HTTP client for API requests
- **Zod** - Schema validation
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Styled Components** - CSS-in-JS styling solution

## Testing & Quality Assurance
- **Vitest** - Unit and integration testing
- **Playwright** - End-to-end testing with visual regression
- **Biome** - Fast formatter and linter
- **Husky** - Git hooks for code quality
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting with Tailwind plugin

## Component Development Patterns
- Use functional components with TypeScript interfaces
- Export components as named exports when possible
- Use proper prop typing with TypeScript interfaces
- Implement proper error boundaries for robust UIs
- Use React.memo() for performance optimization when needed
- Follow compound component pattern for complex components
- Use custom hooks for reusable stateful logic

## Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Follow mobile-first responsive design principles
- Use Tailwind's design system for consistent spacing and colors
- Use CSS-in-JS (styled-components) only when Tailwind is insufficient
- Optimize images using Vite's image optimization plugin
- Use CSS Grid and Flexbox for layouts

## State Management
- Use React Context for global application state
- Implement custom hooks for complex state logic
- Use TanStack Query for server state management
- Store authentication state in localStorage with proper serialization
- Use useReducer for complex local component state
- Follow the principle of lifting state up when needed

## Routing & Navigation
- Use React Router DOM for client-side routing
- Implement proper error boundaries for routes
- Use nested layouts for consistent page structure
- Implement protected routes with authentication guards
- Use proper loading states for async route components
- Follow RESTful URL patterns

## Testing Patterns
- Use Vitest for unit and integration tests
- Write snapshot tests for component regression testing
- Use Playwright for end-to-end testing with visual screenshots
- Test user interactions and accessibility
- Mock external dependencies appropriately
- Test error states and edge cases
- Use data-testid attributes for reliable test selectors
- Implement visual regression testing with Playwright screenshots

## Build & Development
- Use Vite for fast development and optimized builds
- Configure path aliases (@/*) for clean imports
- Use TypeScript strict mode for better code quality
- Implement proper environment variable handling
- Use ES modules and modern JavaScript features
- Optimize bundle size with proper code splitting
- Use Vite plugins for enhanced development experience

## Performance Optimization
- Implement lazy loading for route components
- Use React.memo() and useMemo() for expensive computations
- Optimize images with WebP format and proper sizing
- Use Vite's built-in code splitting and tree shaking
- Implement proper loading states and skeleton UIs
- Use TanStack Query for efficient data fetching and caching
- Monitor and optimize Core Web Vitals

## Authentication & Security
- Implement secure token storage patterns
- Use proper authentication context providers
- Implement protected route patterns
- Handle authentication state persistence
- Use secure HTTP headers and HTTPS in production
- Validate all user inputs with Zod schemas
- Implement proper error handling for auth failures

## Code Quality & Formatting
- Use Biome for consistent code formatting and linting
- Configure Prettier with Tailwind plugin for class sorting
- Use Husky for pre-commit hooks
- Follow conventional commit messages
- Use TypeScript strict mode for better type safety
- Implement proper ESLint rules for React and TypeScript
- Use absolute imports with path mapping (@/*)

## Deployment & CI/CD
- Build optimized production bundles with Vite
- Use proper environment variables for different environments
- Implement continuous integration with GitHub Actions
- Use Playwright for automated testing in CI
- Deploy to modern hosting platforms (Cloudflare Pages, Vercel, etc.)
- Monitor application performance and errors in production
