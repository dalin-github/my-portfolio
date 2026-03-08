<template>
  <section id="volunteer" class="section">
    <h2>Volunteer & Internship</h2>
    <div class="volunteer-grid">
      <div v-for="item in volunteer" :key="item.title" class="volunteer-card">
        <img :src="item.image" :alt="item.title" class="volunteer-image" />
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

// ✅ Only your experiences, with your own images
const volunteer = ref([
  {
    title: 'Food Team Volunteer — Earth Hour Cambodia',
    date: '2024',
    details: [
      'Experienced meditation and learning about nature, animals, and humans',
      'Appreciated efforts to reduce plastic and organized food and drinks'
    ],
    image: '/earth-hour.jpg' // replace with your actual image filename
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.volunteer-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.volunteer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.volunteer-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.volunteer-content {
  padding: 16px;
}

.volunteer-content h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
  color: var(--accent);
}

.volunteer-date {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 8px;
}

.volunteer-details {
  list-style: disc;
  padding-left: 18px;
  margin: 0;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
}
</style>
