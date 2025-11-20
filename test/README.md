# Omni Asset 2 - Investment Landing Page

A modern, responsive landing page for Omni Asset 2, a financial investment product offering secured securities with guaranteed returns. Built with Next.js and featuring smooth animations and a beautiful UI.

## 🚀 Technology Stack

### Core Framework

- **Next.js** 16.0.3 - React framework with App Router
- **React** 19.2.0 - UI library
- **TypeScript** 5 - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS** 4 - Utility-first CSS framework
- **Framer Motion** 12.23.24 - Animation library for React
- **Lucide React** 0.554.0 - Icon library

### Development Tools

- **ESLint** 9 - Code linting
- **PostCSS** - CSS processing

## ✨ Features

### 🎨 User Interface

- **Responsive Design** - Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with gradient backgrounds and smooth transitions
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Interactive Elements** - Hover effects, smooth scrolling, and animated components

### 📊 Sections

1. **Hero Section**

   - Animated text with gradient effects
   - Call-to-action buttons
   - Smooth scroll navigation

2. **Product Metrics Section**

   - Key investment metrics display:
     - Total capital raised (14 тэрбум ₮)
     - Unit price (100,000 ₮)
     - Annual return (19.2%)
     - Investment period (24 months)
     - Interest payment frequency (every 3 months)
     - Tax rate (5%)

3. **Features Section**

   - Four key features highlighted:
     - **Guaranteed Assets** - Secured by real estate loan portfolios
     - **Regular Income** - Quarterly payments at 19.2% annual interest
     - **Professional Management** - Managed by Apex Capital
     - **Tax Benefits** - Tax-advantaged returns

4. **How It Works Section**

   - Three-step process:
     1. Register as an investor with Apex Capital
     2. Invest starting from 100,000₮
     3. Receive quarterly interest payments

5. **Footer Section**
   - Contact information and additional links

### 🎯 Technical Features

- **Client-Side Rendering** - Optimized for interactivity
- **Type Safety** - Full TypeScript support
- **Component-Based Architecture** - Modular, reusable components
- **Performance Optimized** - Fast loading and smooth animations
- **Accessibility** - Semantic HTML and proper ARIA attributes

## 📦 Project Setup Instructions

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation Steps

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd test
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application

### Build for Production

1. **Create production build**

   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 📁 Project Structure

```
test/
├── app/
│   ├── _components/
│   │   ├── animation/          # Animation components
│   │   ├── sections/          # Page sections
│   │   └── header.tsx         # Header component
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page component
├── public/
│   └── images/                # Image assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The project uses Next.js App Router architecture
- All components are client-side rendered (`"use client"`)
- Images are stored in the `public/images/` directory
- The project is configured for TypeScript with strict mode enabled

## 📄 License

This project is private and proprietary.
