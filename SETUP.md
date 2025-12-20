# Portfolio Setup Guide

## Quick Start

Your portfolio site is ready to run! Here's how to get started:

### 1. Start the Development Server

```bash
cd portfolio-site
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### 2. Customize Content

All content is in `lib/constants.ts`. Update:
- Personal information (name, email, phone, bio)
- Projects list
- Skills categories
- Work experience
- Social links

### 3. Add Your Images

#### Professional Headshot
Replace the placeholder in the About section by updating the component or adding your image to `/public/` and importing it.

#### Project Images
Option 1: Replace the Unsplash URLs in `lib/constants.ts` with your own image URLs
Option 2: Add images to `/public/projects/` and reference them like `/projects/your-image.jpg`

#### Resume PDF
Replace `/public/resume.pdf` with your actual resume. The current file is just a placeholder.

### 4. Contact Form Setup (Required for Production)

The contact form sends messages to Slack. To set it up:

1. Go to [https://api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)
2. Create or select a Slack app
3. Enable "Incoming Webhooks" and add a webhook to your workspace
4. Copy the webhook URL
5. Create `.env.local` file:

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 5. Build for Production

```bash
pnpm build
pnpm start
```

### 6. Deploy

#### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

## Project Features

✅ Dark mode theme
✅ Smooth scroll animations
✅ Responsive navigation
✅ Working contact form
✅ Resume download
✅ SEO optimized
✅ Accessibility compliant

## Customizing Colors

Edit `app/globals.css` to change the color scheme:

```css
--color-background: #0a0a0a
--color-surface: #1a1a1a
--color-accent: #60a5fa
```

## Need Help?

Check the main README.md for more detailed documentation.

