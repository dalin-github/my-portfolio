<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <h1>Harch Dalin</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <h2>Hi, I'm Harch Dalin ✨</h2>
      <p>Final-year IT Engineering student passionate about turning ideas into digital solutions through technology.</p>
    </section>

    <!-- Picture Slider -->
    <section class="carousel">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.title" />
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.tech }}</p>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <h2>About Me</h2>
      <p>I am a final year IT Engineering student passionate about turning ideas into digital solutions through technology with a strong foundation in critical thinking and technologies.</p>
    </section>

    <!-- Education -->
    <section id="education">
      <h2>Education</h2>
      <ul>
        <li><strong>Royal University of Phnom Penh</strong> — Bachelor’s in IT Engineering (2023 – Present)</li>
        <li><strong>Hun Sen Dombae High School</strong> — Bac II Diploma (2017 – 2022)</li>
      </ul>
    </section>

    <!-- Skills -->
    <section id="skills">
      <h2>Skills</h2>
      <div class="skills">
        <span>SQL</span>
        <span>MySQL</span>
        <span>Python</span>
        <span>Streamlit</span>
        <span>PHP</span>
        <span>Laravel</span>
        <span>JavaScript</span>
        <span>HTML/CSS</span>
        <span>Data Analytics</span>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <h2>Projects</h2>
      <div class="project" v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p><strong>Tech:</strong> {{ project.tech }}</p>
      </div>
    </section>

    <!-- Resume -->
    <section id="resume">
      <h2>Resume</h2>
      <a href="/resume.pdf" target="_blank">Download Resume</a>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: yourname@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
    </section>

    <!-- Footer -->
    <footer>
      <p>© 2026 Harch Dalin | Last updated: March 2026</p>
    </footer>
  </div>
</template>

<script setup>
const slides = [
  { image: "/project1.jpg", title: "Water Quality Prediction", tech: "Python, Streamlit, ML" },
  { image: "/project2.jpg", title: "Market Basket Analysis", tech: "Apriori Algorithm, Data Analytics" },
  { image: "/project3.jpg", title: "Book Store Management System", tech: "SQL, MySQL, Figma" },
  { image: "/project4.jpg", title: "Rokmer Tourism Website", tech: "Laravel, PHP, MySQL" }
]

const projects = [
  { title: "Water Quality Prediction", description: "Predicted water quality using Python and deployed via Streamlit.", tech: "Python, Streamlit, ML" },
  { title: "Market Basket Analysis", description: "Applied Apriori algorithm to analyze transactions for business intelligence.", tech: "Python, Pandas, Mlxtend" },
  { title: "Book Store Management System", description: "Designed and implemented a relational database with normalization.", tech: "SQL, MySQL, Figma, Excel" },
  { title: "Rokmer Tourism Website", description: "Developed a tourism website using Laravel and MySQL backend.", tech: "Laravel, PHP, MySQL" }
]
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f8f9fa;
}
.navbar {
  display: flex;
  justify-content: space-between;
  background: #343a40;
  color: white;
  padding: 10px 20px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #007bff, #6610f2);
  color: white;
}
.carousel {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
}
.carousel img {
  max-height: 200px;
  border-radius: 8px;
}
section {
  padding: 40px 20px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.skills span {
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
footer {
  text-align: center;
  background: #343a40;
  color: white;
  padding: 20px;
}
</style>
