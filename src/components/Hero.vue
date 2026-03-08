<template>
  <section class="hero" id="hero">
    <div class="hero-content">

      <div class="hero-text">
        <h2>Hi, I'm Harch Dalin ✨</h2>
        <p>Thank you for your consideration and time for reviewing my CV and Portfolio. Nice to meet you ☘️</p>
        <a href="#projects" class="cta-btn">View My Projects →</a>
      </div>

      <div class="hero-photos">
        <img src="/profile1.jpg"  class="photo photo-1" alt="photo 1" />
        <img src="/profile4.jpg"  class="photo photo-2" alt="photo 2" />
        <img src="/profile5.jpg"  class="photo photo-3" alt="photo 3" />
        <img src="/profile.jpg"   class="photo photo-4" alt="photo 4" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  padding: 10px 22px;
  background: var(--text-color);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.cta-btn:hover { background: var(--accent); }

/* Photo stack */
.hero-photos {
  position: relative;
  width: 320px;
  height: 300px;
  flex-shrink: 0;
}

.photo {
  position: absolute;
  object-fit: cover;
  border-radius: 18px;
  border: 3px solid #fff;
  box-shadow: 0 8px 24px rgba(90,122,74,0.13);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.photo:hover {
  transform: scale(1.06) rotate(0deg) !important;
  box-shadow: 0 14px 32px rgba(90,122,74,0.2);
  z-index: 10;
}

/* Position each photo in the stack */
.photo-1 {
  width: 155px; height: 155px;
  top: 0; left: 20px;
  transform: rotate(-3deg);
  z-index: 3;
}
.photo-2 {
  width: 130px; height: 130px;
  top: 10px; right: 10px;
  transform: rotate(4deg);
  z-index: 2;
}
.photo-3 {
  width: 145px; height: 145px;
  bottom: 20px; left: 0;
  transform: rotate(2deg);
  z-index: 4;
}
.photo-4 {
  width: 155px; height: 155px;
  bottom: 10px; right: 20px;
  transform: rotate(-4deg);
  z-index: 3;
}
</style>