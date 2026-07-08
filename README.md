<div align="center">
  <h1>👨‍💻 Interactive Developer CV</h1>
  <p><b>A modern, responsive portfolio and resume layer built with Next.js 16 and Tailwind CSS v4</b></p>
</div>

## 📖 About the Project

The **Interactive Developer CV** is a production-ready frontend application designed to elegantly present professional experience, technical stacks, and blockchain engineering credentials. Built with the latest **Next.js** framework, it serves as a high-performance, statically optimized digital resume tailored to engage recruiters and technical hiring managers.

This architecture drops traditional, static PDF resumes in favor of an immersive, dark-themed UI with ambient gradients, responsive grid layouts, and seamless typography, demonstrating frontend proficiency alongside Web3 backend skills.

**Key Technical Highlights:**
* **Next.js 16.2 & React 19:** Leveraging the latest bleeding-edge React features and Next.js App Router for optimal rendering and fast load times.
* **Tailwind CSS v4:** Utilizing utility-first CSS for highly maintainable, complex responsive designs, custom glow effects, and precision layout control.
* **Lucide React & React Icons:** Optimized SVG iconography to enhance visual hierarchy without heavy asset payloads.
* **Geist Font Integration:** Vercel's highly optimized font family for pristine, developer-centric typography.

---

## ⚙️ How It Works

The application operates as a unified Single Page Application (SPA) driven by a main `page.tsx` component. It divides the user's professional profile into distinct, easily scannable sections: Header (Contact/Socials), Profile Summary, Tech Stack (Web3 & Frontend separated), Experience Timeline, Education, and Certifications.

The UI leverages CSS variables and Tailwind's arbitrary values to create deep contrast, utilizing a primary dark palette (`#0a0a0a`) accented by Web3-themed neon gradients (purple, cyan, and blue).

[app/page.tsx](./src/app/page.tsx) - Main UI Component & Layout

---

## 💻 Technical Docs

The primary entry point of the application is the `ResumePage` default export. It is structured using semantic HTML5 tags (`<main>`, `<header>`, `<section>`) to ensure accessibility and SEO compliance. 

🚀 Execution Example
Here is a step-by-step example of how a technical recruiter interacts with the Interactive CV.

Step 1: Landing & First Impression
The recruiter opens the hosted URL. The page instantly loads (optimized by Next.js) displaying a sleek, dark-themed card. A top gradient border (purple to cyan) immediately signals a modern Web3 aesthetic.

Step 2: Contact & Social Verification
At the top, the recruiter finds clickable icons for GitHub and LinkedIn. Hovering over them triggers subtle background transitions, indicating a polished, interactive UI.

Step 3: Technical Scanning
Scrolling down, the recruiter checks the "Tech Stack" section. The use of a grid separates "Web3 & Blockchain" from "Frontend & Backend", allowing them to quickly verify key skills like Solidity, Foundry, Next.js, and ZKPs.

Step 4: Experience Timeline Review
The recruiter views the Experience section, built as a custom vertical timeline. Color-coded nodes (Purple for current, Blue for previous, Gray for older) guide the eye chronologically through roles from Production Manager to Full Stack Blockchain Developer.

⬆️ Installation
To run this project locally, ensure you have Node.js (v18+) installed.

# Clone the repository
git clone <your-repo-url>

# Navigate into the directory
cd cv-project

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev