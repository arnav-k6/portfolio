# Arnav Kapadia - Portfolio Website

My personal portfolio webpage showcasing my projects, skills, and experience in Electrical Engineering.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **HTML/CSS3/JS** - Styling with custom properties and animations
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

## Contact

Arnav Kapadia
- Email: arnavkapadia@gmail.com
- GitHub: [arnav-k6](https://github.com/arnav-k6)
- LinkedIn: [arnav-kapadia](https://www.linkedin.com/in/arnav-kapadia-060306284/)

---

Built with ❤️ and React
