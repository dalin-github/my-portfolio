<template>
  <div class="project-card">
    <img :src="source" :alt="title" />
    <h3>{{ title }}</h3>
    <p><em>{{ date }}</em></p>
    <p>{{ description }}</p>
    <div class="tech-list">
      <span v-for="item in techItems" :key="item" class="tech-badge">{{ item }}</span>
    </div>
    <a v-if="repo" :href="repo" target="_blank" class="source-button">Source</a>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  date: String,
  description: String,
  tech: String,
  source: String,
  repo: { type: String, default: '' }
});

const techItems = computed(() => props.tech.split(',').map(s => s.trim()));
</script>

