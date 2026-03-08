<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="logo">D</div>
    <div class="nav-items">
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#projects">Portfolio</a>
      <a href="#volunteer">Experience</a>
      <div class="current-time">{{ currentTime }}</div>
    </div>
    <div class="toggle-circle">
      <!-- progress ring -->
      <svg class="progress-ring" viewBox="0 0 20 20">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="none"
          stroke="rgba(0,0,0,0.6)"
          stroke-width="1"
          :stroke-dasharray="ringDash"
          class="transition-all duration-75 ease-out"
        />
      </svg>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref(new Date().toLocaleTimeString());
const scrolled = ref(false);
const scrollProgress = ref(0);
const ringDash = ref('0 50.27');

let timer;
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
  window.addEventListener('scroll', onScroll);
  updateProgress();
});
onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener('scroll', onScroll);
});

function onScroll() {
  scrolled.value = window.scrollY > 50;
  updateProgress();
}

function updateProgress() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - windowHeight;
  const percentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;
  scrollProgress.value = Math.min(percentage, 100);
  const circumference = 2 * Math.PI * 8; // r=8
  const dash = (scrollProgress.value / 100) * circumference;
  ringDash.value = `${dash} ${circumference}`;
}
</script>
