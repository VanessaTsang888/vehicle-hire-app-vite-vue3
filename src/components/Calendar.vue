<template>
  <div class="flex">
    <litepie-datepicker v-model="dateValue"></litepie-datepicker>
  </div>
</template>

<script>
import { ref } from 'vue';
import LitepieDatepicker from 'litepie-datepicker';

export default {
  components: {
    LitepieDatepicker,
  },
  setup() {
    const dateValue = ref([]);

    return {
      dateValue,
    };
  },
};
</script>
