<template>
  <section id="contact" class="section">

    <div class="contact-form-card">
      <!-- Header: subtitle + social links in one row -->
      <div class="form-header">
        <p class="contact-sub">Feel free to reach out — I'd love to connect!</p>
        <div class="contact-links">
          <a href="https://github.com/dalin-github" target="_blank" class="contact-icon-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <span class="divider-dot">·</span>
          <a href="mailto:dalinharch23@gmail.com" class="contact-icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
            </svg>
            dalinharch23@gmail.com
          </a>
        </div>
      </div>

      <div class="form-divider"></div>

      <!-- Form fields -->
      <div class="form-row">
        <div class="form-field">
          <label>Your Name*</label>
          <input v-model="form.name" type="text" placeholder="Harch Dalin" />
        </div>
        <div class="form-field">
          <label>Company Name</label>
          <input v-model="form.company" type="text" placeholder="Optional" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-field">
          <label>Email Address*</label>
          <input v-model="form.email" type="email" placeholder="you@example.com" />
        </div>
        <div class="form-field">
          <label>Phone Number*</label>
          <input v-model="form.phone" type="tel" placeholder="+855 ..." />
        </div>
      </div>
      <div class="form-field">
        <label>A Few Words*</label>
        <textarea v-model="form.message" rows="5" placeholder="Your message..."></textarea>
      </div>

      <div class="form-divider"></div>

      <div class="form-footer">
        <button class="send-btn" @click="send">
          Send Message
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
        <p v-if="sent" class="sent-msg">✅ Opening Telegram...</p>
        <div class="form-info">
          <span class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Phnom Penh, Cambodia
          </span>
          <span class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            089 764 768
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ name: '', company: '', email: '', phone: '', message: '' })
const sent = ref(false)
function send() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  const text = encodeURIComponent(`👋 Hi, I'm ${form.value.name}` + (form.value.company ? ` from ${form.value.company}` : ``) + `
📧 ${form.value.email}` + (form.value.phone ? `
📞 ${form.value.phone}` : ``) + `

${form.value.message}`)
  window.open(`https://t.me/+85589764768`, '_blank')
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<style scoped>
.contact-form-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px 32px 24px;
}

/* Header row */
.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 0;
}
.contact-sub {
  font-size: 0.92rem;
  color: var(--muted);
  margin: 0;
}
.contact-links {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact-icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-color);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-color);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.contact-icon-btn:hover {
  background: var(--accent-pale);
  border-color: var(--accent-hover);
  color: var(--accent);
}
.divider-dot {
  color: var(--border);
  font-size: 1.2rem;
  line-height: 1;
}

.form-divider {
  height: 1px;
  background: var(--border);
  margin: 22px 0;
}

/* Form layout */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
}
.form-field {
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}
label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}
input, textarea {
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--border);
  outline: none;
  font-size: 0.93rem;
  font-family: inherit;
  color: var(--text-color);
  padding: 4px 0 10px;
  transition: border-color 0.2s;
  resize: none;
}
input::placeholder, textarea::placeholder { color: #ccc; }
input:focus, textarea:focus { border-bottom-color: var(--accent); }

/* Footer */
.form-footer {
  display: flex;
  align-items: center;
  gap: 18px;
}
.send-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  background: var(--text-color);
  color: #fff;
  border: none;
  border-radius: 40px;
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.send-btn:hover { background: var(--accent); }
.sent-msg { font-size: 0.88rem; color: var(--accent); font-weight: 500; margin: 0; }
.form-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  text-align: right;
}
.info-item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  font-size: 0.82rem;
  color: var(--muted);
  font-weight: 500;
}

@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
  .form-header { flex-direction: column; align-items: flex-start; }
  .contact-form-card { padding: 20px; }
}
</style>