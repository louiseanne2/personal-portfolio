# 🌐 Personal Portfolio Website

Welcome to my personal portfolio! This website highlights my background, technical expertise, and professional aspirations as an **aspiring Software Quality Assurance (SQA)** specialist. It is built using **React** and designed to provide a seamless, modern, and visually appealing experience for visitors — whether they’re potential employers, collaborators, or anyone interested in my work.

---

## 🎯 Purpose

The purpose of this portfolio is to serve as a **professional yet personal platform** that showcases who I am, what I do, and where my strengths lie.
It functions as both an **interactive resume** and a **creative presentation of my skills and goals**, offering visitors an insight into my journey as an aspiring SQA professional.

The site is fully responsive, easy to navigate, and built to reflect both **technical proficiency and design awareness**.

---

## 📁 Portfolio Structure

This portfolio includes the following main sections:

### 🏠 Home
- Serves as the **landing page** introducing me at a glance.
- Includes a showcase of my **skills** in testing tools, and technologies I’m familiar with.
- Designed with subtle animations and interactive visuals for an engaging first impression.

### 👩‍💻 About
- Provides a detailed overview of **who I am**, my background, and my personal and professional interests.
- Features a **downloadable PDF resume** for quick access to my professional qualifications.
- Includes the **“What Do I Do?”** section, summarizing my areas of focus and current goals in the software quality assurance field.

### ⚙️ Expertise
- Highlights my **core competencies as an aspiring SQA** — including testing techniques, analytical thinking, and attention to detail.
- Describes the tools, processes, and methodologies I’ve learned and apply in my work.
- Emphasizes my **commitment to quality, precision, and continuous learning** in every project I undertake.

### 📞 Contact
- Allows visitors to easily **get in touch with me** through a contact form or via my professional platforms (LinkedIn, GitHub, or email).
- Encourages networking, collaboration, or feedback opportunities.

---

## 💻 Technologies Used

This portfolio was developed with:
- **React** – For building the dynamic and responsive interface.
- **Vite** – For fast development and optimized builds.
- **CSS** – For styling, animations, and responsive layout design.
- **GitHub Pages** – For hosting and deploying the live version of the website.

---

## ⚡ Features & Functionality

- **Responsive Design:** Fully optimized for desktop, tablet, and mobile screens.
- **Interactive Elements:** Smooth transitions, hover effects, and animated components for a modern user experience.
- **Downloadable Resume:** Visitors can download my resume directly from the About page.
- **Clean Navigation:** Intuitive navigation bar and anchor links for effortless browsing across sections.
- **Professional UI/UX:** Simple, modern, and visually cohesive interface reflecting attention to detail and usability.

---

## 🛠️ Setup Instructions

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your computer.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## 🚀 Deployment

To deploy the project to GitHub Pages:
1. **Install gh-pages:**
   ```bash
   npm install gh-pages--save-dev
   ```
2. **Update package.json scripts:**
   - Add this
  
   "scripts": {
      ...,
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
   }

   
3. **Configure vite.config.js:**
   - set path depending on GitHub repository name
  
     export default defineConfig({
     
        base: "/YOUR_REPOSITORY_NAME/",
     
        plugins: [react()],
     
      });
     
4. **Add homepage in package.json file:**

   
   {
   ...,
   "homepage": "https://<USERNAME>.github.io/<REPOSITORY_NAME>/",
   ...,
   }
6. **Push Your Code to GitHub**
7. **Deploy**
    ```bash
   npm run deploy
   ```


---

## 🌍 Live Demo

**GitHub Pages URL:**
- 👉 [(https://louiseanne2.github.io/personal-portfolio/)]

**Demo Recording:**
- 👉 [(https://drive.google.com/drive/folders/19u7m7Tdlukxxrb9IQz-Oa0yc7hfXRTxY)]

