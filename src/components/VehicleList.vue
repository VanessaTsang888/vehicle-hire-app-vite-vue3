<!-- 
  dispatch an action to our store so that it fills the vehicles variable/Array in store.js with all vehicles. So will mutate the empty array to fill it with all of our vehicles.
-->

<template>
  <div>
    <h2>Vehicle List</h2>
    <ul v-for="(vehicle, index) in vehicles" :key="index">
      <li>{{ vehicle }}</li>
    </ul>
  </div>
</template>
<!--  define our props to pass data from Home.vue to this Component -->
<script>
// import { createNamespacedHelpers } from 'vuex';
export default {
  computed: {
    vehicles() {
      return this.$store.getters.allVehicles;
    },
  },
  // Err Msg: vuex.esm-bundler.js:1013 [vuex] unknown action type: getVehicles
  // cannont dispatch this action -
  mounted() {
    this.$store.dispatch('getVehicles');
  },
};
</script>
