<template>
  <nav-bar />
  <!-- <my-header /> -->
  <!-- <router-link to="/contact"> تماس </router-link>
  <router-link to="/about"> درباره </router-link> -->
  <router-view></router-view>
</template>

<script>
// import MyHeader from './components/my-header.vue'
import NavBar from './components/nav-bar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    // MyHeader
  }
}
</script>

<style>
@import './assets/css/style.css'
</style>
