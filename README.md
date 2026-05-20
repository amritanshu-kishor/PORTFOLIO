# Amritanshu Kishor - Portfolio

![Portfolio Preview](./public/favicon.svg) <!-- Replace with an actual screenshot of the portfolio once deployed -->

A modern, dynamic, and fully responsive portfolio website built for an **AI-Focused Developer and Research Contributor**. This project showcases an advanced monolithic black-and-white aesthetic with fluid 3D elements powered by React Three Fiber.

## 🚀 Features

- **Interactive 3D Hero Section**: A custom-built floating robot model created entirely with Three.js primitives, fully animated and responsive to the scrolling state.
- **Monochrome Glassmorphism**: A sleek, dark UI focusing on deep blacks, crisp whites, and smooth greys to draw attention directly to the content.
- **Framer Motion Animations**: Smooth enter-animations, scroll-linked fade-ins, and micro-interactions on every section.
- **Vite & React**: Lightning-fast build times, Hot Module Replacement, and optimized bundle sizes.
- **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom properties, Flexbox, Grid)
- **3D Rendering**: `@react-three/fiber`, `@react-three/drei`, `three.js`
- **Animations**: `framer-motion`
- **Icons**: `react-icons`, `lucide-react`

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5174/` (or the port specified in your terminal).

## 🚀 Deployment (Vercel)

This project is perfectly set up for zero-configuration deployment on [Vercel](https://vercel.com/):
1. Push your code to a GitHub repository.
2. Go to Vercel, click **Add New Project**, and import your GitHub repo.
3. Vercel will automatically detect that it's a Vite project.
4. Click **Deploy**. Vercel will run `npm run build` and publish your site!

## 📝 Customization

- **3D Robot Face Image**: Drop an image file (e.g., `face.png`) into the `/public` folder and map it to the robot's face screen in `src/components/Model.jsx` using `@react-three/drei`'s `useTexture`.
- **Colors**: To modify the monochrome aesthetic, update the CSS variables in `src/index.css`.

---
*Designed & Built by [Amritanshu Kishor](https://linkedin.com/in/amritanshukishor-b49514332)*
