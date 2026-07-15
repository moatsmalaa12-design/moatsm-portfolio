# 🚀 Moatsm Alaa Mohamed — Portfolio Website

A modern, responsive portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌙 Dark / Light Mode
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🎞️ Smooth Framer Motion Animations
- ⌨️ Typing Effect in Hero Section
- 📊 Animated Skill Progress Bars
- 🗂️ Filterable Skills by Category
- 📬 Contact Form with Loading State
- 🔗 Social Media Links

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **React Icons** — Icon library
- **React Scroll** — Smooth scrolling
- **React Type Animation** — Typing effect

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# 1. Navigate to project folder
cd moatsm-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📁 Project Structure

```
src/
├── assets/          # Profile photo & static files
├── components/      # Reusable React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js   # All CV data — edit here!
├── hooks/
│   └── useDarkMode.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## ✏️ Customization

All personal information is centralized in `src/data/portfolioData.js`.
Edit that file to update:
- Personal info & contact details
- Skills & proficiency levels
- Work experience & projects
- Education
- Certificates

## 📄 License

MIT — Free to use and modify