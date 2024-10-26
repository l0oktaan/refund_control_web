<template>
    <h1>{{ find }}</h1>
    <v-btn @click="increment">
      Button
    </v-btn>
</template>

<script lang='ts' setup>
// import { defineComponent } from 'vue'
import { ref } from 'vue'
import _default from 'vuetify/util/colors';
// Logo
// import logo from '../assets/logo.svg'
const find = ref(50)
const increment = () =>{
  find.value--
}
</script>
