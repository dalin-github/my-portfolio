<template>
  <section id="education" class="section">
    <h2>Education</h2>
    <div class="education-list">
      <div class="education-item">
        <img src="/university.png" alt="Royal University of Phnom Penh" class="edu-logo" />
        <div class="edu-details">
          <h3>
            <a href="https://www.rupp.edu.kh/" target="_blank">
              Royal University of Phnom Penh
            </a>
          </h3>
          <p>Bachelor’s Degree in IT Engineering</p>
          <span>2023 – Present</span>
        </div>
      </div>

      <div class="education-item">
        <img src="/school.jpg" alt="Hun Sen Dombae High School" class="edu-logo" />
        <div class="edu-details">
          <h3>Hun Sen Dombae High School</h3>
          <p>Bac II Diploma</p>
          <span>2017 – 2022</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.education-item {
  display: flex;
  align-items: center;
  background: #f5f5f5; /* light gray background like sample */
  padding: 12px 16px;
  border-radius: 8px;
}

.edu-logo {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%; /* circular logos */
  margin-right: 16px;
  border: 2px solid var(--accent);
}

.edu-details h3 {
  margin: 0;
  font-size: 1rem;
  color: green; /* green header text like sample */
}

.edu-details h3 a {
  text-decoration: none;
  color: green;
}

.edu-details h3 a:hover {
  color: darkgreen;
}

.edu-details p {
  margin: 4px 0;
  font-size: 0.9rem;
  color: #333;
}

.edu-details span {
  font-size: 0.85rem;
  color: #777;
}
</style>
