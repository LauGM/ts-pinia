import { defineStore } from 'pinia'

interface datosCiudad {
    ciudad: string,
    habitantes: number
}

export const useCiudadStore = defineStore('ciudadStore', {
    state: () => {
        return {
          ciudadActual:{} as datosCiudad
        }
      },
      getters: {
        obtenerCiudadActual: (state) => state.ciudadActual,
      },
      actions: {
        cambiar(nueva:datosCiudad){
            this.ciudadActual=nueva;
        }
      },
    });