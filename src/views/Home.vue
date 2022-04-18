<!-- eslint-disable vue/html-self-closing -->

<template>
  <div class="home">
    <div class="HeroBlock bg-gray-400 h-screen">
      <div class="container flex justify-center items-center h-screen">
        <reservation-form></reservation-form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../components/Button.vue';
import VehicleList from '../components/VehicleList.vue';
import ReservationForm from '../components/ReservationForm.vue';

export default {
  name: 'Home',
  components: {
    CustomButton,
    VehicleList,
    ReservationForm,
  },
};
</script>
