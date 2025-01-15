<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let animationFrame = null
let nodes = []
let mouse = { x: 0, y: 0 }
let width = 0
let height = 0

const NODE_COUNT = 50
const NODE_RADIUS = 3
const CONNECTION_DISTANCE = 150
const REPULSION_DISTANCE = 100
const MOVEMENT_SPEED = 0.5

class Node {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * MOVEMENT_SPEED
    this.vy = (Math.random() - 0.5) * MOVEMENT_SPEED
    this.targetX = x
    this.targetY = y
  }

  update() {
    // Mouse repulsion
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < REPULSION_DISTANCE) {
      const force = (REPULSION_DISTANCE - distance) / REPULSION_DISTANCE
      this.vx -= (dx / distance) * force * 0.5
      this.vy -= (dy / distance) * force * 0.5
    }

    // Update position
    this.x += this.vx
    this.y += this.vy

    // Boundary check
    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1

    // Damping
    this.vx *= 0.99
    this.vy *= 0.99
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, NODE_RADIUS, 0, Math.PI * 2)
    ctx.fill()
  }
}

function init() {
  if (!canvas.value) return
  
  width = window.innerWidth
  height = window.innerHeight
  canvas.value.width = width
  canvas.value.height = height

  // Create nodes
  nodes = []
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(new Node(
      Math.random() * width,
      Math.random() * height
    ))
  }
}

function drawConnections() {
  ctx.beginPath()
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < CONNECTION_DISTANCE) {
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
      }
    }
  }
  ctx.stroke()
}

function animate() {
  if (!ctx) return
  
  ctx.clearRect(0, 0, width, height)
  
  // Set styles
  ctx.fillStyle = 'rgba(62, 175, 124, 0.5)'
  ctx.strokeStyle = 'rgba(62, 175, 124, 0.15)'
  ctx.lineWidth = 1

  // Update and draw nodes
  nodes.forEach(node => node.update())
  drawConnections()
  nodes.forEach(node => node.draw())

  animationFrame = requestAnimationFrame(animate)
}

function handleMouseMove(e) {
  const rect = canvas.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function handleResize() {
  if (!canvas.value) return
  init()
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  init()
  animate()
  
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <canvas
    ref="canvas"
    class="hero-background"
    aria-hidden="true"
  />
</template>

<style scoped>
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>