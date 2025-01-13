# React Store Application

### [GitHub Page](https://react-store-app01.netlify.app/)

A modern, responsive e-commerce application built with React, TypeScript, and TailwindCSS.

## Features
- Product catalog with search and filtering
- Shopping cart functionality
- Responsive design with Tailwind CSS
- State management with Redux Toolkit
- Type-safe development with TypeScript

## Getting Started
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Architecture
The application follows a modular structure:

- `src/components/*` - Reusable UI components
- `src/store/*` - Redux store configuration and slices
- `src/types/*` - TypeScript interfaces

## API Integration
The application integrates with the Fake Store API to fetch:
- Product catalog
- Product details
- Categories

## Development
- TypeScript for type safety
- Tailwind CSS for styling
- Redux Toolkit for state management
- Lucide React for icons

## Production Build
```bash
npm run build
```
This will create an optimized production build in the `dist` directory.

### Author

- [Denis Chornyi](https://github.com/Denis-Chornyi)
