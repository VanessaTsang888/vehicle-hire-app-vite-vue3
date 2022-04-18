<!-- eslint-disable vue/html-self-closing -->

<!-- 
The power of Vue + Tailwind Combined: Button.vue Component -> reusable code. Can have multiple componenets without writing so much css.
The custom button tag has an attribute of dark This will make the btn black rather than gray. The button element for this is in Button Component -> template element. 

    <vehicle-list></vehicle-list>
Testing Vuex: VehicleList.vue component

// I have installed the axios module and I can see it in package.json

-->
<template>
  <div class="home">This is a Homepage</div>
</template>

<script>
import CustomButton from '../components/Button.vue';
import VehicleList from '../components/VehicleList.vue';
// import { createNamespacedHelpers } from 'vuex';

export default {
  name: 'Home',
  components: {
    CustomButton,
    VehicleList,
  },
};
</script>
