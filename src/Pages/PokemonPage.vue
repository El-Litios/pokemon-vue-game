<template>
  <div>
      <h1>Cual es el POKEMON</h1>
      <!-- IMG -->
      <PokemonPicture :pokemonId="4" :showPokemon="true"/>

      <!-- RESPUESTAS -->
      <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getOptions from '@/Pages/helpers/getPokemon'
console.log(getOptions());

export default {
    components: {
        PokemonPicture, PokemonOptions
    }
}
</script>

