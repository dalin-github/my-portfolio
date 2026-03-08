<template>
  <div class="project-card">
    <div class="project-img-wrap">
      <img v-if="source" :src="source" :alt="title" />
      <span v-else class="project-emoji">🛠</span>
    </div>
    <div class="project-body">
      <h3>{{ title }}</h3>
      <p class="project-date">{{ date }}</p>
      <p class="project-desc">{{ description }}</p>
      <div class="tech-list">
        <span v-for="item in techItems" :key="item" class="tech-badge">{{ item }}</span>
      </div>
      <a v-if="repo" :href="repo" target="_blank" class="source-button">
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: String, date: String, description: String,
  tech: String, source: String, repo: { type: String, default: '' }
})
const techItems = computed(() => props.tech.split(',').map(s => s.trim()))
</script>

<style scoped>
.project-img-wrap {
  height: 160px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--accent-pale), #d6e8c8);
  display: flex; align-items: center; justify-content: center;
}
.project-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.project-emoji { font-size: 3rem; }
.project-body { padding: 16px 18px 18px; }
.project-date { font-size: 0.8rem; color: var(--muted); margin: 0 0 8px; }
.project-desc { font-size: 0.87rem; color: #555; line-height: 1.65; margin: 0 0 12px; }
</style>