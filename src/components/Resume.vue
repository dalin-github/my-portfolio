<template>
  <section id="resume" class="section" style="text-align:center; padding-bottom: 48px;">
    <h2>📄 Resume</h2>
    <p style="color:var(--muted);font-size:0.95rem;margin-bottom:14px;">Download my latest resume</p>
    <a href="/resume.pdf" target="_blank" class="resume-dl-btn">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
      </svg>
      Download Resume
    </a>
  </section>
</template>

<style scoped>
.resume-dl-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  background: var(--text-color);
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.resume-dl-btn:hover { background: var(--accent); }
</style>