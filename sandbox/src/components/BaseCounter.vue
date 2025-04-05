<script setup lang="ts">
  import {reactive, computed} from "vue";

  const props = defineProps( {
    incrementCount: {
      type: Function,
    },
    count: {
      type: Number,
    },
    incrementAmount: {
      type: Number,
    }
  })
   const state = reactive({
     pokemonList: []}
   )
  const counterTitle = computed( () => {
      return props.count >= 20 ? "The number is higher than 20" : ""}
  )
  const  fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const data = await response.json()
      state.pokemonList = data;
      console.log(state.pokemonList);
}


</script>
<template>
  <slot name="title"/>
  <p>{{ counterTitle }}</p>
  <p>{{ count }}</p>
  <button @click="incrementCount">Increment</button>
  <br>
<ul>
  <li >{{state.pokemonList.name}}</li>
</ul>
  <button @click="fetchPokemon">Fetch Pokemon</button>
  <label for="incrementAmount">Increment for:</label>
  <input type="number" id="incrementAmount" :value="incrementAmount"
         @input="$emit('update:incrementAmount', +$event.target.value)"/>
</template>
