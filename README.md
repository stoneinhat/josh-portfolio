# Joshua Tesch - Portfolio Website

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimal dark theme design
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive across all devices
- ♿ Accessibility-focused (WCAG AA compliant)
- 🚀 Optimized performance with Next.js 15
- 📬 Working contact form with email integration
- 🎯 SEO optimized with proper meta tags

## Tech Stack

- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod validation
- **Email Service:** Resend
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-site
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables (optional for contact form):

Create a `.env.local` file in the root directory:

```env
# Contact Form Configuration (optional)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=joshuastesch@gmail.com
```

To get a Resend API key:
- Sign up at [resend.com](https://resend.com)
- Create an API key in your dashboard
- Verify your domain (or use the free `onboarding@resend.dev` for testing)

**Note:** The contact form will work without the API key in development - it will log submissions to the console instead.

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-site/
├── app/
│   ├── api/contact/         # Contact form API endpoint
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── Navigation.tsx      # Sticky navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Featured projects
│   ├── Experience.tsx     # Work experience timeline
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Site footer
├── lib/
│   ├── constants.ts       # Site data (projects, skills, etc.)
│   └── utils.ts           # Utility functions
└── public/
    ├── resume.pdf         # Downloadable resume (replace with actual)
    └── projects/          # Project images (to be added)
```

## Customization

### Updating Content

All content is centralized in `lib/constants.ts`:

- **Personal Info:** Name, title, email, phone, bio
- **Projects:** Featured project details
- **Skills:** Categorized skill lists
- **Experience:** Work history and highlights
- **Social Links:** GitHub, LinkedIn, email

### Adding Project Images

1. Replace the placeholder project images in the `projects` array in `lib/constants.ts`
2. Add your project images to the `public/projects/` directory
3. Update the `image` field in each project with the new path

Or continue using Unsplash URLs for now.

### Replacing Resume PDF

Replace the placeholder file at `public/resume.pdf` with your actual resume PDF.

### Color Theme

The color palette is defined in `app/globals.css`:

```css
--color-background: #0a0a0a
--color-surface: #1a1a1a
--color-border: #2a2a2a
--color-text-primary: #ffffff
--color-text-secondary: #a0a0a0
--color-accent: #60a5fa
```

Modify these values to customize the theme.

## Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `.next` folder.

To test the production build locally:

```bash
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (if using contact form)
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form | Optional* |
| `CONTACT_EMAIL` | Email address to receive contact form submissions | Optional |

*The contact form will work in development without the API key by logging to console.

## License

© 2025 Joshua Tesch. All rights reserved.

## Support

For questions or issues, please contact joshuastesch@gmail.com
