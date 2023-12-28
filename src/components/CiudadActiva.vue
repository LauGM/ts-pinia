<script setup lang="ts">
import { ref } from 'vue'
import {useCiudadStore} from '../stores/ciudadStore';
const miCiudad = useCiudadStore();

//antes del store
/* const ciudad = ref('');
const habitantes = ref(0); */

//con el store
const ciudad = ref(miCiudad.ciudadActual.ciudad);
const habitantes = ref(miCiudad.ciudadActual.habitantes);

interface datosCiudad {
    ciudad: string,
    habitantes: number
}

const objetoCiudad = ref<datosCiudad>(
    {
        ciudad: '',
        habitantes: 0
    }
);


function crearObjetoCiudad(): void {
    objetoCiudad.value.ciudad = ciudad.value;
    objetoCiudad.value.habitantes = habitantes.value;
    miCiudad.cambiar(objetoCiudad.value);
}

</script>

<template>
    <div class="formulario">
        <label>
            Ingrese ciudad actual:
            <input type="text" v-model="ciudad">
        </label>
        <label>
            Cantidad de habitantes:
            <input type="number" v-model="habitantes">
        </label>
        <button @click="crearObjetoCiudad()">Actualizar</button>
    </div>
    <p>{{ objetoCiudad }}</p>
</template>


<style scoped>
.formulario {
    margin: 30px;
}
</style>