# Overview

This is a web proxy application built with React, TypeScript, and Express. The application allows users to enter a website URL and view it through a proxy interface with browser-like navigation controls. It features a modern UI with a cosmic purple theme, animated starfield background, and comprehensive component library using shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Client-side routing with Wouter library for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful API with JSON endpoints under `/api` prefix
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with status code management
- **Development**: Hot module replacement with Vite development server integration

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema changes
- **Connection**: Neon Database serverless PostgreSQL integration
- **Session Storage**: PostgreSQL session store using connect-pg-simple
- **In-Memory Fallback**: MemStorage class for development/testing without database

## Database Schema
- **Users Table**: Basic user management with ID, username, and password fields
- **Proxy Sessions Table**: Tracks proxy sessions with user association, target URLs, and active status
- **Validation**: Zod schemas for type-safe data validation and insertion

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage
- **User Management**: Basic user creation and retrieval system
- **Security**: Input validation using Zod schemas for all user inputs

## Proxy System
- **URL Validation**: Server-side URL validation with protocol restrictions (HTTP/HTTPS only)
- **Proxy Interface**: Custom React component with browser-like navigation controls
- **Session Tracking**: Database persistence of proxy sessions with user association
- **Security Controls**: Basic security checks to prevent malicious URL access

## Development and Build
- **Development**: Hot reloading with Vite dev server and Express backend integration
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)
- **Type Safety**: Shared TypeScript types between client and server
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/, @assets/)

## UI/UX Features
- **Responsive Design**: Mobile-first responsive design with Tailwind breakpoints
- **Dark Theme**: Custom dark theme with cosmic purple accent colors
- **Animations**: CSS animations for starfield background and UI transitions
- **Toast Notifications**: User feedback system for actions and errors
- **Loading States**: React Query integration for loading and error states

# External Dependencies

## Core Framework Dependencies
- **React**: Frontend framework with hooks and modern patterns
- **Express**: Backend web framework for Node.js
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire application

## Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library on top of Radix
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe CSS class variants

## State Management and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with minimal re-renders
- **Zod**: Schema validation for forms and API data

## Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **Drizzle Kit**: Database migration and schema management
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Routing and Navigation
- **Wouter**: Lightweight client-side routing
- **http-proxy-middleware**: Proxy middleware for development

## Additional Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class names
- **nanoid**: URL-safe unique ID generator
- **cmdk**: Command palette component