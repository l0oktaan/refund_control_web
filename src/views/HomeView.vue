<template>  
  <div>
    <h1>{{ message }}</h1>
    <input v-model="message" placeholder="Type something..." />
    <button @click="clearMessage">&nbsp;Clear Message ผxx</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const message = ref<string>('สวัสดี ภาษาไทย');

    const clearMessage = () => {
      message.value = '';
    };

    return { message, clearMessage };
  },
});
</script>
<style scoped>

</style>