<template>
  <div class="pokemon-container">
    
    <img class="pokemon-hidden" :class="imgShow" :src="imgSrc" alt="Pokemon">
    <img class="fade-in" v-if="showPokemon" :src="imgSrc" alt="Pokemon">

  </div>
</template>

<script>
export default {
  props:{
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },

    /* imgShow(){
      return this.showPokemon ? 'pokemon-hidden' : 'fade-in'
    } */
  }
}
</script>

<style scoped>
  .pokemon-container {
    height: 200px;
  }
  img {
      height: 200px;
      position: absolute;
      right: 45%;
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
  }
  .pokemon-hidden {
      filter: brightness(0);
  }
</style>