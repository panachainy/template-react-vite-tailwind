# GitHub Copilot Instructions

## Project Overview
This is a React application built with Vite and styled with Tailwind CSS. It serves as a modern frontend development template with fast build times and utility-first CSS framework.

## Tech Stack
- **React**: UI library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Superset of JavaScript for type safety
- **Vitest**: Testing framework for unit tests
- **Playwright**: End-to-end testing framework

## Development Guidelines

### Code Style
- Use functional components with hooks
- Prefer TypeScript for type safety
- Use Tailwind utility classes for styling
- Follow React best practices for component composition

### File Structure
- Components should be placed in `src/components/`
- Pages/routes in `src/pages/` or `src/routes/`
- Utilities and helpers in `src/utils/`
- Types/interfaces in `src/types/`

### Component Patterns
- Use arrow functions for components
- Implement proper prop types with TypeScript
- Create reusable UI components
- Use custom hooks for complex logic

### Styling Guidelines
- Prefer Tailwind utility classes over custom CSS
- Use responsive design patterns with Tailwind breakpoints
- Create custom components for repeated UI patterns
- Follow mobile-first responsive design

### Best Practices
- Keep components small and focused
- Use meaningful variable and function names
- Implement proper error handling
- Write clean, readable code with appropriate comments

### Testing
- Use Vitest and React Testing Library for unit tests
- Write tests for components, utilities, and hooks
- Ensure tests cover edge cases and user interactions
- Use snapshot testing for consistent output validation
- Group related test cases using `describe` blocks
- Test multiple scenarios with comprehensive input variations
- Include edge cases like zero values, negative numbers, and boundary conditions

### E2E Testing
- Use Playwright for end-to-end testing
- Write tests that simulate real user interactions
- Test critical user flows and navigation paths
- Use data-testid attributes for reliable element selection
- Test across different browsers and devices
- Include visual regression testing when applicable
- Test form submissions, API interactions, and state changes
- Verify accessibility compliance in user workflows

#### File Organization
- Place E2E tests in `e2e/` directory
- Organize tests by page/feature (e.g., `e2e/src/pages/Home/Home.spec.tsx`)
- Use descriptive test file names with `.spec.tsx` extension
- e.g. code place `src/pages/Home/Home.tsx` test place `e2e/src/pages/Home/Home.spec.tsx`
- focused on snapshot testing for consistent UI validation
- Use `beforeEach` and `afterEach` hooks for setup and teardown
