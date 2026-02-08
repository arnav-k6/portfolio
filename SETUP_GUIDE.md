# Portfolio Website - Complete Setup Guide

## Quick Start (For Beginners)

### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the LTS version (Long Term Support)
3. Run the installer and follow the prompts
4. Verify installation by opening terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both.

### Step 2: Create Your Project

Option A: Using the provided files
1. Create a new folder called `portfolio` on your computer
2. Copy all the files from this project into that folder
3. Make sure the folder structure matches exactly

Option B: Starting from scratch with Vite
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
```
Then copy all the files from `src/` and root directory.

### Step 3: Install Dependencies

1. Open terminal/command prompt
2. Navigate to your project folder:
   ```bash
   cd path/to/portfolio
   ```
3. Install all required packages:
   ```bash
   npm install
   ```

### Step 4: Run the Development Server

```bash
npm run dev
```

Your website will open at `http://localhost:5173`

Press `Ctrl+C` to stop the server.

## File Structure Explained

```
portfolio/
│
├── index.html              # Main HTML file (entry point)
│
├── package.json            # Lists all dependencies
├── vite.config.js         # Vite build configuration
├── README.md              # Project documentation
│
└── src/                   # Source code folder
    ├── main.jsx           # React entry point
    ├── index.css          # Base CSS reset
    ├── App.jsx            # Main App component
    ├── App.css            # Global styles
    │
    └── components/        # All React components
        ├── Navigation.jsx
        ├── Navigation.css
        ├── Hero.jsx
        ├── Hero.css
        ├── About.jsx
        ├── About.css
        ├── Experience.jsx
        ├── Experience.css
        ├── Projects.jsx
        ├── Projects.css
        ├── Skills.jsx
        ├── Skills.css
        ├── Contact.jsx
        └── Contact.css
```

## Customization Guide

### 1. Update Personal Information

#### Hero Section (`src/components/Hero.jsx`)
```jsx
// Line ~35: Change your name
<h1 className="hero-name">
  Your Name Here
</h1>

// Line ~41: Change your title/subtitle
const fullText = "Your Title Here";

// Line ~48: Update description
<p className="hero-description">
  Your bio here...
</p>

// Line ~63-75: Update stats
<div className="stat-number">1,378</div>  // Your GitHub contributions
```

#### About Section (`src/components/About.jsx`)
```jsx
// Line ~11-15: Update intro paragraph
<p className="about-intro">
  Your introduction...
</p>

// Line ~38-63: Update interests
<div className="interest-item">
  <div className="interest-icon">🔧</div>
  <div className="interest-label">Your Interest</div>
</div>

// Line ~71-93: Update quick facts
<li>
  <span className="fact-icon">📍</span>
  <span>Your Location</span>
</li>
```

#### Experience Section (`src/components/Experience.jsx`)
```jsx
// Line ~8-43: Update experiences array
const experiences = [
  {
    title: "Your Title",
    company: "Company Name",
    period: "Start - End",
    location: "City, State",
    type: "Job Type",
    highlights: [
      "Achievement 1",
      "Achievement 2"
    ],
    skills: ["Skill1", "Skill2"]
  }
];
```

#### Projects Section (`src/components/Projects.jsx`)
```jsx
// Line ~8-75: Update projects array
const projects = [
  {
    title: "Project Name",
    category: "ml" | "hardware" | "embedded" | "web",
    description: "Brief description",
    highlights: [
      "Key point 1",
      "Key point 2"
    ],
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    featured: true  // Shows "Featured" badge
  }
];
```

#### Skills Section (`src/components/Skills.jsx`)
```jsx
// Line ~7-67: Update skill categories
const skillCategories = [
  {
    title: "Category Name",
    icon: "🎨",  // Any emoji
    skills: [
      { name: "Skill Name", level: 85 }  // level 0-100
    ]
  }
];

// Line ~120-140: Update coursework
<div className="course-code">CPEN 211</div>
<div className="course-name">Course Name</div>
```

#### Contact Section (`src/components/Contact.jsx`)
```jsx
// Line ~27: Update email
<a href="mailto:your-email@gmail.com">

// Line ~48-58: Update contact info
<div className="contact-value">Your Location</div>
<div className="contact-value">Your Status</div>

// Line ~64-66: Update GitHub link
href="https://github.com/your-username"

// Line ~76-78: Update LinkedIn link
href="https://www.linkedin.com/in/your-profile"
```

### 2. Change Colors

Edit `src/App.css` (lines 3-15):

```css
:root {
  --bg-dark: #0a0e14;          /* Dark background */
  --bg-card: #131920;          /* Card background */
  --text-primary: #e6e8eb;     /* Main text color */
  --accent-green: #3dd68c;     /* Primary accent */
  --accent-blue: #4c9aff;      /* Secondary accent */
  /* Change these hex codes to your preferred colors */
}
```

Color picker tool: https://coolors.co/

### 3. Change Fonts

In `src/App.css` (line 1), replace the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update the font-family:
```css
body {
  font-family: 'Your Font', serif;
}
```

Browse fonts: https://fonts.google.com/

### 4. Adjust Animations

In `src/App.css` (lines 154-184):

```css
/* Speed up/slow down animations */
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;  /* Change 0.6s */
}

/* Adjust delay between elements */
.stagger-1 { animation-delay: 0.1s; }  /* Increase/decrease */
```

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder with your production-ready files.

### Test Production Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173` to see the production build.

## Deployment Options

### Option 1: Vercel (Easiest - Recommended)

1. Create account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts
5. Your site will be live at `https://your-project.vercel.app`

**Or use Vercel Dashboard:**
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-deploys on every push

### Option 2: Netlify

1. Build your project:
   ```bash
   npm run build
   ```
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder
4. Your site is live!

**Or connect Git:**
1. Push code to GitHub
2. New site from Git in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings

## Common Issues & Solutions

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Kill the process on port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Issue: Changes not showing

**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: GitHub Pages shows blank page

**Solution:**
1. Check `base` in `vite.config.js` matches your repo name
2. Ensure all links start with `/portfolio/` (your repo name)
3. Check browser console for errors

### Issue: Fonts not loading

**Solution:**
1. Check internet connection (Google Fonts requires internet)
2. Verify font names in CSS match Google Fonts exactly
3. Clear browser cache

## Performance Optimization

### 1. Image Optimization

- Use WebP format for images
- Compress images before adding
- Use appropriate sizes (don't use 4K images for thumbnails)

Tools:
- https://tinypng.com/
- https://squoosh.app/

### 2. Code Splitting

For larger apps, consider lazy loading:

```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  );
}
```

### 3. Lighthouse Audit

1. Open your site in Chrome
2. Right-click → Inspect → Lighthouse tab
3. Generate report
4. Fix issues shown

## Getting Help

### Resources

- **React Docs**: https://react.dev/
- **Vite Docs**: https://vitejs.dev/
- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/

### Common Questions

**Q: How do I add a new section?**
A: Create a new component in `src/components/`, import it in `App.jsx`, and add it to the navigation.

**Q: Can I use TypeScript?**
A: Yes! Rename `.jsx` files to `.tsx` and run `npm install --save-dev @types/react @types/react-dom typescript`

**Q: How do I add a blog?**
A: Consider using a headless CMS like Contentful or integrating with a static site generator.

**Q: Can I add a database?**
A: This is a static site. For dynamic data, consider using Firebase, Supabase, or a backend API.

## Next Steps

1. ✅ Customize all content with your information
2. ✅ Test on different browsers and devices
3. ✅ Run Lighthouse audit
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share your portfolio link!

## Support

If you run into issues:
1. Check this guide first
2. Search the error message online
3. Check React/Vite documentation
4. Ask on Stack Overflow or Reddit r/reactjs

Good luck with your portfolio! 🚀
