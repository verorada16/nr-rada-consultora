<template>
  <div id="app-wrapper">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style lang="scss">
@import './assets/main.scss';

#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>