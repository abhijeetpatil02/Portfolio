# Abhijeet Patil - Personal Portfolio

A modern, responsive, and high-performance personal portfolio website built for **Abhijeet Patil** (MCA Student & Full Stack Web Developer).

Features a sleek dark glassmorphism design system, smooth scroll animations, dynamic typewriter effect, interactive project cards, and clean modular code architecture.

---

## 🏗️ Architecture & File Connection Map

`index.html` is the **main entry point** that connects the entire application. Here is how all modular CSS and JS files connect to it:

```
c:\Users\ABHIJITH\Portfolio\
│
├── index.html                  <-- MAIN ENTRY POINT (Connects CSS & JS)
│
├── style.css                   <-- Master Stylesheet (Imports modular CSS)
│   ├── css/variables.css       <-- Colors, Design Tokens, Resets
│   ├── css/components.css      <-- Glass Cards, Buttons, Badges, Particles
│   └── css/sections.css       <-- Section Layouts, Grids & Media Queries
│
├── script.js                   <-- Master JavaScript (Imports ES Modules)
│   ├── js/typing.js            <-- Hero Typewriter Animation
│   ├── js/navigation.js        <-- Sticky Header, Scroll Highlights, Mobile Menu
│   ├── js/animations.js        <-- Scroll Observer & Skill Progress Bars
│   ├── js/projects.js          <-- Expand/Collapse Project Details
│   └── js/contact.js           <-- Contact Form Interaction
│
├── sections/                   <-- Standalone Modular Section HTML Components
│   ├── header.html
│   ├── hero.html
│   ├── about.html
│   ├── skills.html
│   ├── internship.html
│   ├── projects.html
│   ├── workshops.html
│   ├── education.html
│   ├── contact.html
│   └── footer.html
│
├── profile.jpg                 <-- Profile Avatar Image
├── Resume/                     <-- Downloadable Resume PDF
└── certificates/               <-- Certification PDF Documents
```

---

## 🚀 How to Run Locally

### Option 1: Live Server (Recommended)
Run any HTTP server in the project directory:
```bash
python -m http.server 8080
# or
npx http-server
```
Then open `http://localhost:8080` in your web browser.

### Option 2: Direct Browser Launch
Double click `index.html` to open directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🎨 Technology Stack
- **HTML5**: Semantic tags & clean modular structure
- **CSS3**: Custom properties (variables), Glassmorphism, CSS Grid/Flexbox, Keyframe Animations
- **JavaScript (ES6+)**: Modular ES imports (`type="module"`), IntersectionObserver API
- **FontAwesome**: Scalable vector icons
- **Google Fonts**: Inter & Outfit typography
