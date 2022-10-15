<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <div v-for="(pokemon, i) in pokemons" :key="i"><p>{{ pokemon.name }}</p></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import api from "@/services/api";

export default defineComponent({
name: "about",
setup(){
  const pokemons = ref([]);
  
  const fetchPokemons = () => api.get("/pokemon?limit=20").then((response) => pokemons.value = response.data.results);

  onMounted(fetchPokemons);

  return {pokemons}
},
});
</script>
