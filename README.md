
# System.css Portfolio

![System.css Portfolio](https://i.imgur.com/goRcNZK.png)

**Live Portfolio**: [https://qtechdevelopment.github.io/system.css/](https://qtechdevelopment.github.io/system.css/)

A retro-styled portfolio website built with system.css - a CSS library that recreates Apple's classic System OS interface (1984-1991). This portfolio showcases modern web development skills through a nostalgic Mac OS aesthetic.

## 🎯 Portfolio Features

### Main Portfolio Page
![Portfolio Homepage](https://via.placeholder.com/800x600/000000/FFFFFF?text=Portfolio+Homepage+Screenshot)

The main portfolio includes:
- **🍂 Autumn Burst Games Banner**: Featured game development projects
- **👤 Profile Section**: Professional introduction and contact information  
- **💼 About Section**: Personal background and professional summary
- **🛠️ Skills & Technologies**: Comprehensive technical skill display
- **🚀 Featured Projects**: Highlighted GitHub repositories and development work
- **📚 Experience & Education**: Professional background and qualifications
- **📞 Contact Links**: Direct access to LinkedIn, GitHub, and project sites

### Interactive Elements
![Interactive Components](https://via.placeholder.com/800x400/000000/FFFFFF?text=Interactive+UI+Components)

The portfolio features authentic System OS components:
- Classic Mac window frames with title bars
- Retro button styling and hover effects
- Period-appropriate typography (Chicago and Geneva fonts)
- Authentic scrollbars and form elements
- System-style dialog boxes and alerts

### Skills & Technologies Section
![Skills Section](https://via.placeholder.com/800x300/000000/FFFFFF?text=Skills+and+Technologies+Display)

Organized display of technical expertise:
- **Frontend**: HTML5, CSS3, JavaScript, React, Vue.js
- **Backend**: Node.js, Python, Java, PHP
- **Database**: MySQL, PostgreSQL, MongoDB
- **Tools**: Git, Docker, VS Code, Photoshop
- **Cloud**: AWS, Azure, Google Cloud Platform

### Featured Projects Gallery
![Projects Gallery](https://via.placeholder.com/800x500/000000/FFFFFF?text=Featured+Projects+Showcase)

Highlighted development work including:
- **Autumn Burst Games**: Game development studio projects
- **Web Applications**: Full-stack development projects
- **Open Source Contributions**: Community involvement
- **Creative Projects**: Design and multimedia work

## 🚀 Live Demo

Visit the live portfolio at: **[https://qtechdevelopment.github.io/system.css/](https://qtechdevelopment.github.io/system.css/)**

### Navigation
- **Main Page**: `/` - Complete portfolio overview
- **Portfolio Page**: `/portfolio.html` - Detailed project showcase
- **Documentation**: `/docs.html` - System.css component library

## 🛠️ Technology Stack

This portfolio demonstrates proficiency in:
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tools**: Node.js, npm, custom build scripts
- **Design System**: system.css retro component library
- **Deployment**: GitHub Pages, automated CI/CD
- **Version Control**: Git, GitHub workflows

## 📱 Responsive Design

![Mobile View](https://via.placeholder.com/400x600/000000/FFFFFF?text=Mobile+Responsive+Design)

The portfolio adapts beautifully across devices while maintaining the classic Mac aesthetic:
- **Desktop**: Full-featured experience with all components
- **Tablet**: Optimized layout for touch interaction
- **Mobile**: Streamlined interface with essential information

## 🎨 Design Philosophy

The portfolio balances nostalgia with modern functionality:
- **Authentic Aesthetics**: True to original System OS design language
- **Modern Usability**: Contemporary UX patterns and accessibility
- **Performance**: Lightweight, fast-loading interface
- **Accessibility**: Screen reader friendly with proper semantic markup

System.css is a CSS library for building interfaces that resemble Apple's System OS which ran from 1984-1991. This portfolio showcases how classic design principles can enhance modern web experiences.

## 🚀 Quick Start

### View the Portfolio
Simply visit: **[https://qtechdevelopment.github.io/system.css/](https://qtechdevelopment.github.io/system.css/)**

### Run Locally
```bash
# Clone the repository
git clone https://github.com/QTechDevelopment/system.css.git
cd system.css

# Install dependencies
npm install

# Start development server
npm start
# or
node server.js

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Development Server Features
- **Live Reload**: Automatically refreshes on file changes
- **File Watching**: Monitors CSS, JS, docs, fonts, and assets
- **Auto Rebuild**: Compiles templates and assets on change
- **Local Preview**: Serves at `http://localhost:3000`

## 🔧 Project Structure

```
system.css/
├── docs/                    # Portfolio templates
│   ├── index.html.ejs      # Main portfolio page
│   ├── portfolio.html.ejs  # Detailed portfolio
│   └── docs.html.ejs       # Component documentation
├── dist/                   # Built files (auto-generated)
├── fonts/                  # Custom retro fonts
├── icon/                   # UI icons and assets
├── style.css              # Core system.css library
├── build.js               # Build system
├── server.js              # Development server
└── package.json           # Dependencies and scripts
```

## 🎯 Using System.css in Your Projects

**CDN Installation (Quickest)**
```html
<link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
```

**NPM Installation**
```bash
npm install @sakun/system.css
```

**Basic Usage Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Retro Portfolio</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
</head>
<body>
    <div class="window" style="width:30rem;">
        <div class="title-bar"> 
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Welcome</h1>
            <button aria-label="Resize" class="resize"></button>
        </div>
        <div class="separator"></div>
        
        <div class="window-pane">
            <h2>Hello, I'm a developer!</h2>
            <p>This is my retro-styled portfolio.</p>
            <button class="btn">View My Work</button>
        </div>
    </div>
</body>
</html>
```

## 🎨 Customizing Your Portfolio

The portfolio is built with EJS templates for easy customization:

### Personal Information
Edit `docs/index.html.ejs` and `docs/portfolio.html.ejs`:

```html
<!-- Update your details -->
<h1>Your Name</h1>
<h2>Your Title</h2>
<p>Your bio and professional summary...</p>

<!-- Update contact links -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://yourproject.com">Your Project</a>
```

### Skills & Projects
Modify the skills and projects sections to reflect your expertise:

```html
<!-- Skills Section -->
<div class="skills-section">
    <h3>Your Skills</h3>
    <ul>
        <li>Your Technology Stack</li>
        <li>Your Frameworks</li>
        <li>Your Tools</li>
    </ul>
</div>

<!-- Projects Section -->
<div class="projects-section">
    <h3>Featured Projects</h3>
    <div class="project">
        <h4>Project Name</h4>
        <p>Project description...</p>
        <a href="project-url" class="btn">View Project</a>
    </div>
</div>
```

### Color Themes
While maintaining the retro aesthetic, you can customize colors in `style.css`:

```css
/* Custom color variations */
.window {
    background: #c0c0c0; /* Classic Mac gray */
}

.btn:hover {
    background: #000; /* Custom hover effects */
    color: #fff;
}
```

## 📊 Portfolio Analytics

Track your portfolio performance:
- **GitHub Pages Stats**: Monitor visitor traffic
- **Link Tracking**: Measure project engagement  
- **Contact Form Analytics**: Track inquiry sources
- **Social Media Integration**: Connect professional profiles

## 🚀 Deployment Options

### GitHub Pages (Recommended)
```bash
npm run deploy
```
Automatically builds and deploys to: `https://yourusername.github.io/repository-name/`

### Other Platforms
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **Surge.sh**: `surge dist/`
- **Firebase Hosting**: `firebase deploy`

## 📱 SEO & Performance

The portfolio is optimized for:
- **Search Engines**: Semantic HTML and meta tags
- **Performance**: Lightweight CSS, optimized assets
- **Accessibility**: Screen reader friendly, keyboard navigation
- **Mobile**: Responsive design across all devices

## 🤝 Connect & Contact

### Professional Links
- **LinkedIn**: [https://www.linkedin.com/in/c-nettles01/](https://www.linkedin.com/in/c-nettles01/)
- **GitHub**: [https://github.com/c-nettles01](https://github.com/c-nettles01)
- **Autumn Burst Games**: [Game Development Portfolio](https://vibe-coding-project-o75c-lt4symiwy-qtechdevelopments-projects.vercel.app/)

### Repository Stats
![GitHub stars](https://img.shields.io/github/stars/QTechDevelopment/system.css?style=social)
![GitHub forks](https://img.shields.io/github/forks/QTechDevelopment/system.css?style=social)
![GitHub issues](https://img.shields.io/github/issues/QTechDevelopment/system.css)

## 🎯 Credits & Inspiration

This portfolio builds upon the excellent system.css library:
- **Original system.css**: Inspired by [98.css](https://github.com/jdan/98.css)
- **Fonts**: Chicago 12pt and Geneva 9pt recreations by [@blogmywiki](https://twitter.com/blogmywiki)
- **Design**: Based on Apple's classic Human Interface Guidelines
- **Assets**: Custom recreated Mac OS icons and UI elements

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

---

**Built with ❤️ using system.css - bringing retro Mac charm to modern portfolios**
