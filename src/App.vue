<template>
  <div id="app">
    <!-- <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/about"> About </router-link>
  </nav> -->
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
