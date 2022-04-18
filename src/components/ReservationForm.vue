<!-- 

The directive label has a set of double quotes and single quotes as need to send a string to component.

-->

<template>
  <div class="ReservationForm p-5 bg-white w-1/2">
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
</template>

<script>
import InputSelect from '../components/forms/InputSelect.vue';

export default {
  components: {
    InputSelect,
  },
};
</script>
