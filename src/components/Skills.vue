<template>
  <section id="skills" class="section">
    <h2>⚡ Skills</h2>

    <!-- Main skills -->
    <ul>
      <li v-for="skill in skills" :key="skill.name" class="skill-box">
        <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
        <span class="skill-label">{{ skill.name }}</span>
      </li>
    </ul>

    <!-- Favourite tools -->
    <p class="tools-heading">🛠 Favourite Tools & Technologies</p>
    <ul class="tools-grid">
      <li v-for="tool in tools" :key="tool.name" class="skill-box">
        <img :src="tool.icon" :alt="tool.name" class="skill-icon" />
        <span class="skill-label">{{ tool.name }}</span>
      </li>
    </ul>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'PHP',        icon: '/php.png' },
  { name: 'Laravel',    icon: '/laravel.png' },
  { name: 'Figma',      icon: '/figma.png' },
  { name: 'Python',     icon: '/python.png' },
  { name: 'MySQL',      icon: '/mysql.png' },
  { name: 'JavaScript', icon: '/java-script.png' },
  { name: 'flaticon',  icon: '/flaticon.png' }
])

const tools = ref([
  { name: 'MySQL',     icon: '/mysql.png' },
  { name: 'SQL',       icon: '/sql.png' },
  { name: 'Draw.io',   icon: '/draw.io.png' },
  { name: 'Vue.js',    icon: '/vue.png' },
  { name: 'GitHub',    icon: '/github.png' },
  { name: 'Databases', icon: '/databases.avif' },
  { name: 'Docker',    icon: '/docker.png' },
  { name: 'Figma',     icon: '/figma.png' },
  { name: 'HTML',      icon: '/html.jpg' },
  { name: 'CSS',       icon: '/css.png' },
  { name: 'Excel',       icon: '/excel.png' },
])
</script>

<style scoped>
.tools-heading {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--badge-text);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: var(--badge-bg);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: 30px;
  margin: 32px 0 20px;
}
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 14px;
  padding: 0;
  list-style: none;
}
</style>