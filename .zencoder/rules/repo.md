---
description: Repository Information Overview
alwaysApply: true
---

# MBL Designer Portfolio Information

## Summary
Professional portfolio website for Maëlle Barrois-Legrand (MBL Designer), an interior architect specializing in residential and commercial design, scenography, and event planning. The site showcases her work, services, and skills in interior architecture.

## Structure
- **src/**: Contains all React components and application code
  - **components/**: UI components organized by page/feature
  - **Assets/**: Images and resources
  - **config/**: Configuration files (EmailJS)
- **public/**: Static files and HTML template
- **Images/**: Additional image resources

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 17.0.2
**Build System**: Create React App
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^17.0.2
- react-dom: ^17.0.2
- react-router-dom: ^6.2.2
- react-bootstrap: ^2.2.1
- bootstrap: ^5.1.3
- @emailjs/browser: ^4.4.1
- react-tsparticles: ^1.42.2
- react-parallax-tilt: ^1.7.42
- typewriter-effect: ^2.18.2

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

## Features
- **Multi-Page Website**: Home, About, Services, Realizations, Contact
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Interactive Elements**: Animations, carousels, and modals
- **Contact Form**: Functional email form using EmailJS
- **Custom Theme**: Beige/brown color scheme defined in style.css

## EmailJS Integration
**Configuration File**: src/config/emailjs.js
**Service ID**: service_d4wug6l
**Template ID**: template_e8p8ww6

## Project Components
- **Home**: Landing page with interactive elements
- **About**: Personal presentation and background
- **Services**: Detailed service offerings by domain
- **Realizations**: Portfolio of completed projects with image galleries
- **Contact**: Functional contact form using EmailJS
- **Resume**: Professional resume/CV display

## Customization
The site can be customized by modifying:
- Personal information in src/components/About/AboutCard.js
- Services in src/components/Services/Services.js
- Projects in src/components/Realizations/Realizations.js
- Contact information in src/components/Contact/Contact.js
- Color theme in src/style.css