<script setup lang="ts">
import { ref } from 'vue'
import SelectorTallas from './components/SelectorTallas.vue';
import CiudadActiva from './components/CiudadActiva.vue';
const tallaDefault = ref(44);
const actualizarTalla = (nuevaTalla:number):void => {
  tallaDefault.value = nuevaTalla;
}
</script>

<template>
  <SelectorTallas :talle="tallaDefault" @cambiar-talla="actualizarTalla($event)" />
  <CiudadActiva />
</template>


<style scoped></style>