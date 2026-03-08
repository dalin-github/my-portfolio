<template>
  <footer class="site-footer">
    <div class="footer-links">
      <a href="https://github.com/dalin-github" target="_blank">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a href="mailto:dalinharch23@gmail.com">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
        </svg>
        Contact
      </a>
    </div>
    <span class="footer-updated">Last updated: March 8, 2026</span>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.85rem;
}
.footer-links { display: flex; gap: 20px; }
.footer-links a {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.88rem; font-weight: 500;
  color: var(--text-color); text-decoration: none; transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
.footer-updated { font-size: 0.8rem; color: var(--muted); }
</style>