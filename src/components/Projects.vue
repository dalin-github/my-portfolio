<template>
  <section id="projects" class="section">
    <h2>🛠 Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        title="Web-based Student Management System"
        date="2026"
        description="End-to-end Laravel MVC platform digitizing student records for Cambodian high schools; replaced paper-based workflows with real-time management of attendance, grades, schedules, and announcements. Implemented secure role-based access for admin, teacher, student, and parent to enable role-specific dashboards and workflows."
        tech="Laravel, PHP, MySQL, Blade, Tailwind CSS, JavaScript"
        source="/student_management.png"
        repo="https://github.com/dalin-github"
        repoIcon="github"
      />
      <ProjectCard
        title="Hotel Booking System"
        date="June 2026"
        description="Full-stack booking platform validated via structured Software Quality Engineering and black-box testing. Designed and executed 15+ test cases across room search, sign-up/login, and booking flows; discovered and reported a booking-flow defect that improved reliability."
        tech="QA Testing, Next.js, React, Supabase (PostgreSQL), Auth.js, bcrypt"
        source="/hotel_booking.png"
        repo="https://github.com/Laysin1/nextjs-hotel-booking.git"
        repoIcon="github"
      />
      <ProjectCard
        title="SmartPark — Automated Parking Fee Testing"
        date="May 2026"
        description="Test-driven system for parking fee calculation and session management with extensive automated verification. Authored 30+ unit, integration, and property-based tests using RED–GREEN–REFACTOR and produced a traceability matrix mapping every business rule to its verifying test."
        tech="Software Testing, C#, xUnit, FsCheck, .NET, TDD"
        source="/smartpark.png"
        repo="https://github.com/dalin-github/automate-test-E5-HarchDalin"
        repoIcon="github"
      />
      <ProjectCard
        title="AWS Academy Graduate - Machine Learning Foundations "
        date="2025"
        description="Learning Basic Machine Learning is an introductory program that teaches the basics of machine learning, artificial intelligence, and deep learning"
        tech="AWS, Machine Learning"
        source="/aws_ml.jpg"
        repo="https://www.credly.com/badges/b557cffb-1c8a-4356-85f7-7acc5e97d9a1/print"
        repoIcon="credly"
      />
      <ProjectCard
        title="Water Quality Prediction"
        date="2025 – 2026"
        description="End-to-end AI system predicting water quality using Python and Jupyter Notebook for data cleaning, analysis, and ML. Results deployed via Streamlit with a frontend built in JavaScript, HTML, CSS, PHP, and Node.js."
        tech="Python, Jupyter Notebook, Streamlit, JavaScript, HTML, CSS, PHP, Node.js"
        source="/water-quality.png"
        repo="https://github.com/dalin-github"
      />
      <ProjectCard
        title="Market Basket Analysis with Apriori Algorithm"
        date="2025 – 2026"
        description="Applied Apriori algorithm with Lift filtering to analyze transactions. Built with Python, Pandas, Mlxtend, and Seaborn to transform raw data into business intelligence for smarter product placement and bundling."
        tech="Python, Pandas, Mlxtend, Seaborn"
        source="/market-basket.png"
        repo="https://github.com/dalin-github"
      />
      <ProjectCard
        title="Rokmerl Tourism Website"
        date="2025"
        description="Tourism platform guiding visitors to places, hotels, and travel info in Cambodia. Developed with Laravel, Blade templates, PHP, JavaScript, HTML, CSS, and MySQL backend."
        tech="Laravel, PHP, MySQL, JavaScript, HTML, CSS"
        source="/rokmer.png"
        repo="https://github.com/dalin-github"
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