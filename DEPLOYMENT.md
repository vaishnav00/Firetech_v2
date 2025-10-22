# Deployment Guide for Firetech Website

## Image Loading Issues - FIXED ✅

The image loading issues have been resolved by:

1. **Moving Images to Public Directory**: All images from the `Images/` folder have been copied to `public/Images/` so Vite can serve them as static assets.

2. **Updated Vite Configuration**: Modified `vite.config.ts` to:
   - Set proper asset directory structure
   - Configure rollup options for image handling
   - Set base path to `./` for relative paths

3. **Build Output**: The build process now properly includes all images in the `dist/Images/` directory.

## Deployment Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**: Upload the entire contents of the `dist` folder to your hosting provider.

3. **Important**: Make sure your hosting provider serves the `dist` folder as the root directory.

## Common Deployment Platforms

### Netlify
- Drag and drop the `dist` folder to Netlify
- Or connect your GitHub repository and set build command: `npm run build`
- Set publish directory: `dist`

### Vercel
- Connect your GitHub repository
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
- Enable GitHub Pages in repository settings
- Set source to GitHub Actions
- Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Testing Locally

To test the production build locally:
```bash
npm run build
npm run preview
```

This will serve the built files at `http://localhost:4173` (or the port shown in terminal).

## Troubleshooting

If images still don't load after deployment:

1. Check browser developer tools Network tab for 404 errors
2. Verify the deployment platform is serving static files correctly
3. Ensure the `dist` folder is uploaded completely
4. Check that the hosting provider supports serving static assets from subdirectories

## File Structure After Build

```
dist/
├── index.html
├── assets/
│   └── index-[hash].js
└── Images/
    ├── about us image.png
    ├── BIS.png
    ├── firetech logo white.png
    └── ... (all other images)
```

The images are now properly included in the build and should load correctly in production! 🎉
