# Arnav Kapadia - Portfolio Website

A modern, responsive personal portfolio website built with React and Vite, showcasing my projects, skills, and experience in Electrical Engineering.

## Features

- **Smooth Scrolling Navigation** - Seamless navigation between sections
- **Interactive Animations** - Engaging fade-in animations and hover effects
- **Responsive Design** - Works perfectly on all devices
- **Project Filtering** - Filter projects by category (Hardware, Embedded, ML/AI, Web)
- **Skills Visualization** - Animated skill bars showing proficiency levels
- **Contact Form** - Easy way to get in touch
- **Modern Design** - Clean, professional aesthetic with distinctive styling

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and animations
- **Google Fonts** - Space Mono and Crimson Pro fonts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Navigation bar
│   │   ├── Navigation.css
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Hero.css
│   │   ├── About.jsx           # About me section
│   │   ├── About.css
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Experience.css
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Projects.css
│   │   ├── Skills.jsx          # Skills & technologies
│   │   ├── Skills.css
│   │   ├── Contact.jsx         # Contact form
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Base reset styles
├── index.html                  # HTML template
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Customization

### Colors

All colors are defined as CSS variables in `App.css`:

```css
:root {
  --bg-dark: #0a0e14;
  --accent-green: #3dd68c;
  --accent-blue: #4c9aff;
  /* ... more variables */
}
```

### Content

Update your personal information in the respective component files:
- **Hero.jsx** - Name, title, introduction
- **About.jsx** - Bio, interests, quick facts
- **Experience.jsx** - Work experience and achievements
- **Projects.jsx** - Project details, descriptions, tech stack
- **Skills.jsx** - Skills and proficiency levels
- **Contact.jsx** - Contact information and social links

### Fonts

The website uses:
- **Space Mono** - For headings and monospace text
- **Crimson Pro** - For body text

To change fonts, update the Google Fonts import in `App.css`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
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
  base: '/portfolio/'  // your repo name
})
```
4. Run: `npm run deploy`

## Performance

- Uses modern CSS for animations (hardware accelerated)
- Lazy loading for smooth scroll
- Optimized images and assets
- Minimal dependencies for fast load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is open source and available for personal use.

## Contact

Arnav Kapadia
- Email: arnavkapadia@gmail.com
- GitHub: [arnav-k6](https://github.com/arnav-k6)
- LinkedIn: [arnav-kapadia](https://www.linkedin.com/in/arnav-kapadia-060306284/)

---

Built with ❤️ and React
