<template>
  <section id="resume" class="resume">
    <h2>Resume</h2>
    <p class="resume-text">Download my resume below:</p>
    <a href="/resume.pdf" target="_blank" class="resume-btn">📄 Download Resume</a>
  </section>
</template>

<style scoped>
.resume {
  text-align: center;
  padding: 60px 20px;
  background:   #ffffff;
  border-radius: 12px;
}

.resume h2 {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--accent);
}

.resume-text {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.resume-btn {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.resume-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}
</style>
