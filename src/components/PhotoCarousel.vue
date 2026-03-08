<template>
  <div class="photo-carousel" @wheel.prevent="onWheel" @mousedown.prevent="onDragStart" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div
      v-for="(src, idx) in images"
      :key="idx"
      class="photo-item"
      :class="{ active: idx === current, zoomed: idx === zoomed }"
      :style="itemStyle(idx)"
      @click="onClick(idx)
      "
    >
      <img :src="src" alt="photo" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: { type: Array, required: true },
  visible: { type: Number, default: 1 } // show only one neighbour for a tidy stack
});

const current = ref(0);
const zoomed = ref(-1);
const animating = ref(false); // lock while transition is running

let lastNav = 0;
function next() {
  const now = Date.now();
  if (animating.value) return;
  if (now - lastNav < 600) return; // throttle
  lastNav = now;
  animating.value = true;
  current.value = (current.value + 1) % props.images.length;
  setTimeout(() => { animating.value = false; }, 800);
}
function prev() {
  const now = Date.now();
  if (animating.value) return;
  if (now - lastNav < 600) return;
  lastNav = now;
  animating.value = true;
  current.value = (current.value - 1 + props.images.length) % props.images.length;
  setTimeout(() => { animating.value = false; }, 800);
}

function onWheel(e) {
  if (animating.value) return;
  if (e.deltaY > 30) next();
  else if (e.deltaY < -30) prev();
}

// drag/swipe
let startX = 0;
function onDragStart(e) {
  startX = e.clientX;
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', onDragEnd);
}
function onDrag(e) {
  const diff = e.clientX - startX;
  if (diff > 80) { prev(); startX = e.clientX; }
  else if (diff < -80) { next(); startX = e.clientX; }
}
function onDragEnd() {
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', onDragEnd);
}

function onTouchStart(e) {
  startX = e.touches[0].clientX;
}
function onTouchMove(e) {
  const diff = e.touches[0].clientX - startX;
  if (diff > 80) { prev(); startX = e.touches[0].clientX; }
  else if (diff < -80) { next(); startX = e.touches[0].clientX; }
}
function onTouchEnd() { }

function onClick(idx) {
  if (idx === current.value) {
    // toggle zoom if clicking currently centred card
    zoomed.value = zoomed.value === idx ? -1 : idx;
  } else {
    // jump directly to clicked card and make it stable
    current.value = idx;
    zoomed.value = -1;
  }
}


function itemStyle(idx) {
  // compute circular offset
  let offset = (idx - current.value) % props.images.length;
  if (offset < 0) offset += props.images.length;
  let pos = offset;
  if (offset > props.images.length / 2) pos = offset - props.images.length;

  const x = pos * 176;             // spacing yields 20% peek of next image
  const y = Math.abs(pos) * 5;     // small vertical shift for depth
  const scale = idx === current.value ? 1 : 0.9;
  const z = 100 - Math.abs(pos);

  // only current (pos 0) and next (pos 1) are visible
  let opacity = 0;
  let pointer = 'none';
  if (pos === 0) {
    opacity = 1;
    pointer = 'auto';
  } else if (pos === 1) {
    opacity = 0.75;
    pointer = 'auto';
  }

  return {
    transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
    zIndex: z,
    opacity,
    pointerEvents: pointer
  };
}
</script>

<style scoped>
.photo-carousel {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 5;
}
.photo-item {
  position: absolute;
  transition: transform 1s ease, opacity 0.6s;
  cursor: pointer;
}
.photo-item img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}
.photo-item:hover {
  transform: scale(1.15) !important;
  box-shadow: 0 10px 20px rgba(0,0,0,0.35);
}
.photo-item.zoomed {
  transform: scale(1.6) !important;
  z-index: 999 !important;
}
</style>