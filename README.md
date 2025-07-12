# Evreka CRM

A modern CRM application built with React and TypeScript, featuring user management with both table and card views, search functionality, and virtualized lists for optimal performance.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

or


```bash
yarn install
```

### Running the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will start at `http://localhost:5173`

## Features

- User Management
  - Table and Card view modes
  - Virtualized lists for handling large datasets
  - Search functionality
  - User status tracking
  - Responsive design

## Tech Stack

- React
- TypeScript
- Styled Components
- React Router
- React Window (virtualization)
- Vite (build tool)

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── hooks/         # Custom React hooks
  ├── styles/        # Global styles and theme
  ├── types/         # TypeScript type definitions
  ├── utils/         # Utility functions
  └── data/          # Mock data and constants
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
