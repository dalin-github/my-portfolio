<template>
  <section class="carousel">
    <div v-for="(slide, index) in slides" :key="index" class="slide">
      <img :src="slide.image" :alt="slide.title" />
      <h3>{{ slide.title }}</h3>
      <p>{{ slide.tech }}</p>
    </div>
  </section>
</template>

<script setup>
const slides = [
  { image: "/project1.jpg", title: "Water Quality Prediction", tech: "Python, Streamlit, ML" },
  { image: "/project2.jpg", title: "Market Basket Analysis", tech: "Apriori Algorithm, Data Analytics" },
  { image: "/project3.jpg", title: "Book Store Management System", tech: "SQL, MySQL, Figma" },
  { image: "/project4.jpg", title: "Rokmer Tourism Website", tech: "Laravel, PHP, MySQL" }
]
</script>
