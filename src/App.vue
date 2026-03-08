<template>
  <div id="app">
    <canvas id="leaf-canvas"></canvas>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Volunteer />
    <Resume />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Volunteer from './components/Volunteer.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import './style.css'
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('leaf-canvas')
  const ctx = canvas.getContext('2d')
  let W, H
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)
  const COLORS = ['rgba(106,176,76,0.55)','rgba(144,198,95,0.45)','rgba(186,220,88,0.40)','rgba(90,122,74,0.50)','rgba(172,209,133,0.42)','rgba(210,230,160,0.38)']
  function drawLeaf(c, s, col) {
    c.fillStyle = col; c.beginPath()
    c.moveTo(0,-s); c.bezierCurveTo(s*.8,-s*.5,s*.8,s*.5,0,s); c.bezierCurveTo(-s*.8,s*.5,-s*.8,-s*.5,0,-s); c.fill()
    c.strokeStyle = col.replace(/[\d.]+\)$/,'0.22)'); c.lineWidth=0.7; c.beginPath(); c.moveTo(0,-s); c.lineTo(0,s); c.stroke()
  }
  class Leaf {
    constructor() { this.reset(true) }
    reset(init=false) {
      this.x=Math.random()*W; this.y=init?Math.random()*H:-20; this.size=6+Math.random()*10
      this.speed=0.18+Math.random()*0.35; this.drift=(Math.random()-0.5)*0.25
      this.rot=Math.random()*Math.PI*2; this.rotSpeed=(Math.random()-0.5)*0.007
      this.sway=Math.random()*Math.PI*2; this.swaySpeed=0.004+Math.random()*0.006; this.swayAmt=0.15+Math.random()*0.3
      this.color=COLORS[Math.floor(Math.random()*COLORS.length)]; this.opacity=.4+Math.random()*.5
    }
    update() {
      this.sway+=this.swaySpeed; this.x+=Math.sin(this.sway)*this.swayAmt+this.drift
      this.y+=this.speed; this.rot+=this.rotSpeed; if(this.y>H+30)this.reset()
    }
    draw(c) { c.save(); c.translate(this.x,this.y); c.rotate(this.rot); c.globalAlpha=this.opacity; drawLeaf(c,this.size,this.color); c.restore() }
  }
  const leaves = Array.from({length:55},()=>new Leaf())
  function animate() { ctx.clearRect(0,0,W,H); leaves.forEach(l=>{l.update();l.draw(ctx)}); requestAnimationFrame(animate) }
  animate()

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)} })
  }, { threshold: 0.08 })
  document.querySelectorAll('.section').forEach(el => io.observe(el))
})
</script>

<style>
#app { position: relative; background: var(--bg-color); }
</style>