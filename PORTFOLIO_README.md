# Interactive Portfolio using system.css

This repository now includes an interactive portfolio page built with the system.css design system.

## Features

The portfolio includes:

- **Profile Section**: Displays name, title, and contact information
- **About Section**: Personal introduction and professional summary
- **Skills & Technologies**: Organized display of technical skills
- **Featured GitHub Projects**: Highlights of development work
- **Autumn Burst Games**: Prominently featured with a special banner and dedicated section
- **Experience & Education**: Professional background
- **Contact Section**: Easy access to LinkedIn, GitHub, and Autumn Burst Games

## Viewing the Portfolio

After building the project, the portfolio is available at:
- Local: `dist/portfolio.html`
- When deployed: `https://your-domain.com/portfolio.html`

## Building the Portfolio

To build the portfolio along with the documentation:

```bash
npm install
npm run build
```

The portfolio will be generated in the `dist/` directory as `portfolio.html`.

## Customizing the Portfolio

The portfolio template is located at `docs/portfolio.html.ejs`. You can customize:

1. **Personal Information**: Update name, title, and bio in the Profile section
2. **Skills**: Add or modify skills in the Skills & Technologies section
3. **Projects**: Update project descriptions and links in the Featured GitHub Projects section
4. **Experience**: Modify the Experience & Education section with your work history
5. **Links**: Update all LinkedIn, GitHub, and Autumn Burst Games URLs

### Key URLs to Update

Currently configured URLs:
- LinkedIn: `https://www.linkedin.com/in/c-nettles01/`
- GitHub: `https://github.com/c-nettles01`
- Autumn Burst Games: `https://autumnburstgames.com`

## Design System

The portfolio uses the system.css design system, which provides:
- Retro Apple System OS aesthetic (1984-1991)
- Window components with title bars
- Buttons with the classic Mac look
- Geneva and Chicago fonts
- Monochrome color scheme

## Development

To work on the portfolio with live reload:

```bash
npm start
```

Then navigate to `http://localhost:3000/portfolio.html`

## Structure

- `docs/portfolio.html.ejs` - Portfolio template source
- `build.js` - Build script that generates the HTML from the template
- `dist/portfolio.html` - Generated portfolio (created after build)

## Links

- [LinkedIn Profile](https://www.linkedin.com/in/c-nettles01/)
- [GitHub Profile](https://github.com/c-nettles01)
- [Autumn Burst Games](https://autumnburstgames.com)
- [system.css Documentation](https://sakofchit.github.io/system.css/)
