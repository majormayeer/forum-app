<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <nav-bar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import 'assets/main.css';
</style>
