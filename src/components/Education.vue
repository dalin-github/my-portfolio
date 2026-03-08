<template>
  <section id="education" class="section">
    <h2>🎓 Education</h2>
    <div class="education-list">
      <div class="education-item">
        <img src="/university.png" alt="Royal University of Phnom Penh" class="edu-logo" />
        <div class="edu-details">
          <strong>
            <a href="https://www.rupp.edu.kh/" target="_blank">Royal University of Phnom Penh</a>
          </strong>
          <em>Bachelor's Degree in IT Engineering</em>
        </div>
        <span class="edu-year">2023 – Present</span>
      </div>
      <div class="education-item">
        <img src="/school.jpg" alt="Hun Sen Dombae High School" class="edu-logo" />
        <div class="edu-details">
          <strong>Hun Sen Dombae High School</strong>
          <em>Bac II Diploma</em>
        </div>
        <span class="edu-year">2017 – 2022</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.education-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.education-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.07);
}
.edu-logo {
  width: 46px; height: 46px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--accent-pale);
  flex-shrink: 0;
}
.edu-details { flex: 1; display: flex; flex-direction: column; gap: 3px; }
.edu-details strong { font-size: 0.95rem; font-weight: 600; color: var(--text-color); }
.edu-details strong a { color: var(--text-color); text-decoration: none; }
.edu-details strong a:hover { color: var(--accent); }
.edu-details em { font-style: normal; font-size: 0.85rem; color: var(--muted); }
.edu-year { font-size: 0.82rem; color: var(--muted); white-space: nowrap; flex-shrink: 0; }
</style>