# VIVEKA 5.0 - Official Website

<div align="center">

  <img src="public/viveka-logo.png" alt="Viveka 5.0 Logo" width="200" />

  <h1>VIVEKA 5.0</h1>
  
  <p>
    <strong>The Official Website for the Largest Techno-Cultural Fest</strong>
  </p>

  <p>
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    </a>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
    </a>
    <a href="https://www.typescriptlang.org">
      <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com">
      <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    </a>
    <a href="https://framer.com/motion">
      <img src="https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
    </a>
  </p>
</div>

<br />

## 🚀 About The Project

**Viveka 5.0** is a state-of-the-art web platform designed to represent the spirit of innovation and culture. This repository contains the source code for the official website, built with modern web technologies to deliver an immersive, high-performance user experience.

The website features a cyberpunk/futuristic aesthetic, leveraging 3D animations, parallax effects, and glassmorphism to engage users while providing essential information about events, schedules, and organizers.

## ✨ Key Features

*   **Cyberpunk Aesthetics**: Custom neon-cyan color palette, dark mode optimizations, and glowing UI elements.
*   **Immersive Hero Section**: Featuring a **Hero Parallax** effect that showcases event highlights in a dynamic scrolling grid.
*   **3D Interactive Elements**:
    *   **Holographic Organizer Cards**: 3D tilt effects for team profiles.
    *   **Tracing Beam**: Visual storytelling component for the organizers page.
    *   **Sparkles & Particles**: Dynamic background effects.
*   **Practical Utilities**:
    *   **Countdown Timer**: A cyberpunk-styled live countdown to the event launch.
    *   **Infinite Sponsors Marquee**: Seamless scrolling ticker for partner logos.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop views with a custom animated mobile menu.
*   **Performance First**: Built on Next.js 14 App Router for server-side rendering and rapid page loads.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **UI Primitives**: [Aceternity UI](https://ui.aceternity.com/), [Tabler Icons](https://tabler-icons.io/)
*   **Fonts**: Space Grotesk (Headers), Inter (Body)

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js 18+ installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/shrinjayshresth1/viveka-5.0-website.git
    cd viveka-5.0-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:3000` to view the application.

## 📂 Project Structure

```bash
viveka-5.0-website/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Home page (Landing)
│   └── organizers/       # Organizers page
├── components/           # React Components
│   ├── ui/               # Reusable UI primitives (Aceternity, etc.)
│   ├── Hero.tsx          # Main Hero section
│   ├── Navbar.tsx        # Responsive Navigation
│   ├── Organizers.tsx    # Organizers layout
│   └── ...
├── public/               # Static assets (images, logos)
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Built with ❤️ by the Viveka 5.0 Web Team
</div>
