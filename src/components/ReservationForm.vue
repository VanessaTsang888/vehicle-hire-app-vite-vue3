<!-- 

The directive label has a set of double quotes and single quotes as need to send a string to component.

-->

<template>
  <div class="ReservationForm p-5 bg-white flex items-end">
    <div class="mr-4">
      <input-select
        :label="'Choose Your Location'"
        :options="[
          {
            label: 'Bristol',
            value: 1,
          },
          {
            label: 'London',
            value: 2,
          },
          {
            label: 'Manchester',
            value: 3,
          },
        ]"
      ></input-select>
    </div>
    <div class="mr-4">
      <label for="">Pick-up Time</label>
      <calendar
        type="calendar"
        input-class="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray mt-2"
      ></calendar>
    </div>
    <div class="mr-4">
      <label for="">Drop-off Time</label>
      <calendar
        type="calendar"
        input-class="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray mt-2"
      ></calendar>
    </div>

    <button
      class="bg-green-700 text-white font-bold py-3 px-4 rounded ml-4"
      @click="filterVehicles"
    >
      Filter Vehicles
    </button>
  </div>
</template>

<script>
import InputSelect from '../components/forms/InputSelect.vue';
import Calendar from '../components/Calendar.vue';

export default {
  components: {
    InputSelect,
    Calendar,
  },
};
</script>
