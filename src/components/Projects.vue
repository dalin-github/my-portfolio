<template>
  <section id="projects" class="section">
    <h2>🛠 Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        title="Water Quality Prediction"
        date="2025 – 2026"
        description="End-to-end AI system predicting water quality using Python and Jupyter Notebook for data cleaning, analysis, and ML. Results deployed via Streamlit with a frontend built in JavaScript, HTML, CSS, PHP, and Node.js."
        tech="Python, Jupyter Notebook, Streamlit, JavaScript, HTML, CSS, PHP, Node.js"
        source="/water-quality.png"
        repo="#"
      />
      <ProjectCard
        title="Market Basket Analysis with Apriori Algorithm"
        date="2025 – 2026"
        description="Applied Apriori algorithm with Lift filtering to analyze transactions. Built with Python, Pandas, Mlxtend, and Seaborn to transform raw data into business intelligence for smarter product placement and bundling."
        tech="Python, Pandas, Mlxtend, Seaborn"
        source="/market-basket.png"
        repo="#"
      />
      <ProjectCard
        title="Rokmerl Tourism Website"
        date="2025"
        description="Tourism platform guiding visitors to places, hotels, and travel info in Cambodia. Developed with Laravel, Blade templates, PHP, JavaScript, HTML, CSS, and MySQL backend."
        tech="Laravel, PHP, MySQL, JavaScript, HTML, CSS"
        source="/rokmer.png"
        repo="#"
      />
      <ProjectCard
        title="Book Store Management System"
        date="2024 – 2025"
        description="Database design project managing inventory, sales, customers, suppliers, and employees. Applied OOAD methodology, created use case/activity diagrams, normalized schema in SQL/MySQL, validated data in Excel, and designed Figma mockups."
        tech="SQL, MySQL, Excel, Figma"
        source="/bookstore.png"
        repo="#"
      />
    </div>
    <div class="view-more">
      <a href="" target="_blank">View More →</a>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
</script>