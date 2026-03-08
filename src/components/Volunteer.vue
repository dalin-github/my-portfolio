<template>
  <section id="volunteer" class="section">
    <h2>🌱 Volunteer & Internship</h2>
    <div class="volunteer-grid">
      <div v-for="item in volunteer" :key="item.title" class="volunteer-card">
        <img v-if="item.image" :src="item.image" :alt="item.title" class="volunteer-image" />
        <div class="volunteer-content">
          <h3>{{ item.title }}</h3>
          <p class="volunteer-date">{{ item.date }}</p>
          <ul class="volunteer-details">
            <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const volunteer = ref([
  {
    title: 'Food Team Volunteer — Earth Hour Cambodia',
    date: '2024',
    details: [
      'Experienced meditation and learning about nature, animals, and humans',
      'Appreciated efforts to reduce plastic and organized food and drinks'
    ],
    image: '/earth-hour.jpg'
  },
  {
    title: 'Logistics Volunteer — 10th Engineering Day at RUPP',
    date: '2023',
    details: [
      'Developed time management and teamwork skills',
      'Handled event coordination and quick problem-solving'
    ],
    image: '/engineering-day.jpg'
  },
  {
    title: 'Volunteer — SEA Games, Olympic Stadium',
    date: '2023',
    details: [
      'Strengthened communication skills through face-to-face interaction',
      'Gained experience in a fast-paced team environment'
    ],
    image: '/sea-games.jpg'
  },
  {
    title: 'Spring Internship Program Batch 16 — Spring Education Center',
    date: '2023',
    details: [
      'Improved English communication skills',
      'Expanded knowledge of marketing strategy during training',
      'Completed a video promoting a marketing challenge'
    ],
    image: '/spring-internship.jpg'
  }
])
</script>

<style scoped>
.volunteer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.volunteer-image {
  width: 100%; height: 160px; object-fit: cover; display: block;
}
.volunteer-content { padding: 16px; }
.volunteer-content h3 {
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.4;
}
</style>