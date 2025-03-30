# Transforming Lives Collaboratively Counselling Website

A modern, minimalist counseling website for 'Transforming Lives Collaboratively Counselling' with a clean black, white, and neutral grey design.

## Overview

This website was built for Dr. Tracy Lee Kalebs to provide information about her counseling services. The site features:

- Clean, minimalist design with a calm and welcoming atmosphere
- Responsive mobile-first layout
- Multiple pages for different sections (Home, About, Services, etc.)
- Contact form for client inquiries

## Technologies

- React.js with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Wouter for routing
- React Query for data fetching

## Deployment Instructions for GitHub Pages

This project is configured to be deployed on GitHub Pages. Follow these steps to deploy:

### 1. Set up a GitHub repository

Create a new repository on GitHub and push your code to it.

### 2. Update the Base Path

Before deploying, you need to update the base path in `client/src/basePath.ts`:

```typescript
// Change this to your GitHub repository name
export const basePath = '/your-repo-name';
```

For example, if your repository is at `github.com/username/tlc-counselling`, set it to:

```typescript
export const basePath = '/tlc-counselling';
```

### 3. Deploy using GitHub Actions

The project includes a GitHub Actions workflow file (`.github/workflows/deploy.yml`) that will automatically build and deploy your site to GitHub Pages when you push to the main branch.

To enable GitHub Pages:

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the "gh-pages" branch as the source
4. Click "Save"

### 4. Manual Deployment (Alternative)

If you prefer to deploy manually, run the following commands:

```bash
# Install dependencies
npm ci

# Build the project
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist
```

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Contact Form

For GitHub Pages deployment, the contact form will simulate a successful submission since the backend server is not available on static hosting. In a production environment with a proper backend, the form will send actual emails.

## License

MIT