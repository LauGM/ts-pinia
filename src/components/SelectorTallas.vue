<script setup lang="ts">

const props = defineProps<{
    talle: Number
}>()

const emits = defineEmits<{
    (evento:'cambiarTalla', nuevaTalla:number):void
}>()

const medidas = [38,40,42,44,46,48];
</script>

<template>
    <p>Talle default {{ props.talle }}</p>
    <div class="botonera">
        <button v-for="medida of medidas" :key="medida" :class="{'activa':props.talle === medida}" @click="emits('cambiarTalla',medida)">{{ medida }}</button>
    </div>
</template>


<style scoped>
.activa{
    background-color: aquamarine;
    color: black;
}
</style>