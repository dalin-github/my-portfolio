<template>
  <section class="hero" id="hero">
    <div class="hero-content">
      <!-- Text -->
      <div class="hero-text">
        <h2>Hi, I'm Harch Dalin</h2>
        <p>
          Final-year IT Engineering student passionate about turning ideas into
          digital solutions through technology.
        </p>
        <a href="#projects" class="cta-btn">View My Projects</a>
      </div>

      <!-- Image carousel -->
      <div class="hero-image-stack">
        <PhotoCarousel :images="availableImages" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PhotoCarousel from './PhotoCarousel.vue'

// list of possible profile images; place them in /public
const availableImages = [
  '/profile1.jpg',
  '/profile.jpg',
  '/profile5.jpg',
]
</script>

<style scoped>
/* Hero section */
.hero {
  padding: 100px 20px 80px;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  position: relative;
  overflow: hidden;
  color: #333;
}

.hero .hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

/* Text */
.hero-text {
  flex: 1 1 400px;
  padding-right: 20px;
  text-align: left;
}

.hero h2 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  animation: fadeIn 1.2s ease-out;
}

.hero p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-top: 12px;
  animation: fadeIn 1.4s ease-out;
}

/* Call-to-action button */
.cta-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.2s ease;
}

.cta-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

/* Image stack */
.hero-image-stack {
  flex: 1 1 300px;
  max-width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Profile images inside carousel */
.hero .profile {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 6px solid rgba(255,255,255,0.9);
  box-shadow: 0 6px 14px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
}

.hero .profile:hover {
  transform: scale(1.05);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
