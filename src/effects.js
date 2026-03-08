/* ─────────────────────────────────────────────────────────────────
   Add this inside a <script> tag at the bottom of your <body>
   Also add <canvas id="leaf-canvas"></canvas> as the FIRST child of <body>
   And add class="reveal" to each <section> you want to fade in on scroll
───────────────────────────────────────────────────────────────── */

// ── Live Clock ──
function updateClock() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const el = document.getElementById('clock'); // give your time element id="clock"
  if (el) el.textContent = `${h}:${String(m).padStart(2, '0')} ${ampm}`;
}
updateClock();
setInterval(updateClock, 1000);

// ── Falling Leaves ──
const canvas = document.getElementById('leaf-canvas');
const ctx = canvas.getContext('2d');

let W, H;
function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const LEAF_COLORS = [
  'rgba(106,176,76,0.55)',
  'rgba(144,198,95,0.45)',
  'rgba(186,220,88,0.40)',
  'rgba(90,122,74,0.50)',
  'rgba(172,209,133,0.42)',
  'rgba(210,230,160,0.38)',
];

function drawLeaf(ctx, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.bezierCurveTo( size * 0.8, -size * 0.5,  size * 0.8, size * 0.5, 0,  size);
  ctx.bezierCurveTo(-size * 0.8,  size * 0.5, -size * 0.8, -size * 0.5, 0, -size);
  ctx.fill();
  // midrib
  ctx.strokeStyle = color.replace(/[\d.]+\)$/, '0.22)');
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(0,  size);
  ctx.stroke();
}

class Leaf {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x        = Math.random() * W;
    this.y        = init ? Math.random() * H : -20;
    this.size     = 6  + Math.random() * 10;
    this.speed    = 0.5 + Math.random() * 1.2;
    this.drift    = (Math.random() - 0.5) * 0.6;
    this.rot      = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.025;
    this.sway     = Math.random() * Math.PI * 2;
    this.swaySpeed= 0.008 + Math.random() * 0.012;
    this.swayAmt  = 0.4  + Math.random() * 0.8;
    this.color    = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)];
    this.opacity  = 0.4  + Math.random() * 0.5;
  }
  update() {
    this.sway += this.swaySpeed;
    this.x    += Math.sin(this.sway) * this.swayAmt + this.drift;
    this.y    += this.speed;
    this.rot  += this.rotSpeed;
    if (this.y > H + 30) this.reset();
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.globalAlpha = this.opacity;
    drawLeaf(ctx, this.size, this.color);
    ctx.restore();
  }
}

const leaves = Array.from({ length: 55 }, () => new Leaf());
function animate() {
  ctx.clearRect(0, 0, W, H);
  leaves.forEach(l => { l.update(); l.draw(ctx); });
  requestAnimationFrame(animate);
}
animate();

// ── Scroll Reveal ──
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ── Navbar active link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-items a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});