<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="logo">D</div>
    <div class="nav-items">
      <a href="#hero"      :class="['nav-link', { 'nav-pill': active === 'about' }]">About</a>
      <a href="#projects"  :class="['nav-link', { 'nav-pill': active === 'projects' }]">Portfolio</a>
      <a href="#volunteer" :class="['nav-link', { 'nav-pill': active === 'volunteer' }]">Experience</a>
            <a href="#resume"    :class="['nav-link', { 'nav-pill': active === 'resume' }]">Resume</a>
      <a href="#contact"   :class="['nav-link', { 'nav-pill': active === 'contact' }]">Contact</a>
    </div>
    <div class="current-time">{{ currentTime }}</div>
    <div class="toggle-circle">
      <svg class="progress-ring" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" fill="none" stroke="rgba(0,0,0,0.15)"
          stroke-width="1.5" :stroke-dasharray="ringDash" />
      </svg>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const scrolled    = ref(false)
const ringDash    = ref('0 50.27')
const active      = ref('about') // default: About is active on load

function formatTime() {
  const now = new Date()
  let h = now.getHours(), m = now.getMinutes()
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${String(m).padStart(2,'0')} ${ampm}`
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0
  const circ = 2 * Math.PI * 8
  ringDash.value = `${(pct / 100) * circ} ${circ}`
}

function updateActive() {
  const sections = [
    { id: 'contact',   key: 'contact'   },
    { id: 'volunteer', key: 'volunteer' },
    { id: 'resume',    key: 'resume'    },
    { id: 'projects',  key: 'projects'  },
    { id: 'skills',    key: 'about'     },
    { id: 'education', key: 'about'     },
    { id: 'about',     key: 'about'     },
    { id: 'hero',      key: 'about'     },
  ]
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el && window.scrollY + 150 >= el.offsetTop) {
      active.value = s.key
      break
    }
  }
}

let timer
onMounted(() => {
  currentTime.value = formatTime()
  timer = setInterval(() => { currentTime.value = formatTime() }, 1000)
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
    updateProgress()
    updateActive()
  })
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.toggle-circle {
  width: 28px; height: 28px;
  background: var(--badge-bg);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.progress-ring { width: 20px; height: 20px; }

/* Base nav link */
.nav-link {
  color: var(--text-color) !important;
  background: transparent !important;
  font-weight: 500;
  transition: background 0.2s, color 0.2s !important;
}
.nav-link:hover {
  background: var(--accent-pale) !important;
  color: var(--accent) !important;
}

/* Active = dark filled pill */
.nav-pill {
  background: var(--text-color) !important;
  color: #fff !important;
  font-weight: 600 !important;
}
.nav-pill:hover {
  background: var(--accent) !important;
  color: #fff !important;
}
</style>