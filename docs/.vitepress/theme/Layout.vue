<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroBackground from './components/HeroBackground.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <HeroBackground />
    </template>
  </Layout>
</template>