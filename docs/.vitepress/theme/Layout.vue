<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroBackground from './components/HeroBackground.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Insertamos la animación antes del hero usando el slot proporcionado por VitePress -->
    <template #home-hero-before>
      <div class="hero-container">
        <HeroBackground />
      </div>
    </template>
  </Layout>
</template>

<style>
.hero-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}
</style>