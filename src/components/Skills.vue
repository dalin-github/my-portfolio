<template>
  <section id="skills" class="section">
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name" class="skill-box">
        <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
        <span class="skill-label">{{ skill.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'PHP', icon: '/php.png' },
  { name: 'Laravel', icon: '/laravel.png' },
  { name: 'Figma', icon: '/figma.png' },
  { name: 'Python', icon: '/python.png' },
  { name: 'MySQL', icon: '/mysql.png' },
  { name: 'JavaScript', icon: '/java-script.png' },
])
</script>
