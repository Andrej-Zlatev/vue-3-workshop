<script setup lang="ts">
import {reactive, computed, ref} from "vue";
import {countStore, incrementCount} from "../composables/countStore"

const state = reactive({
    pokemonList: [],
    incrementAmount: 0
  }
)
const counterTitle = computed(() => {
    return countStore.count >= 20 ? "The number is higher than 20" : ""
  }
)
const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const data = await response.json()
  state.pokemonList = data;
}


</script>
<template>
  <slot name="title"/>
  <p>{{ counterTitle }}</p>
  <p>{{ countStore.count }}</p>
  <button @click="incrementCount(state.incrementAmount)">Increment</button>
  <br>
  <ul>
    <li>{{ state.pokemonList.name }}</li>
  </ul>
  <button @click="fetchPokemon">Fetch Pokemon</button>
  <label for="incrementAmount">Increment for:</label>
  <input v-model.number="state.incrementAmount" type="number" placeholder="Increment"/>
</template>

