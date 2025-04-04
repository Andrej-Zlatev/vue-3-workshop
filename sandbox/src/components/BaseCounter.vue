<script>
export default {
  name: "BaseCounter",
  props: {
    incrementCount: {
      type: Function,
    },
    count: {
      type: Number,
    },
    incrementAmount: {
      type: Number,
    }
  },
  data() {
    return {
      pokemonList: []
    }
  },
  computed: {
    counterTitle() {
      return this.count >= 20 ? "The number is higher than 20" : "";
    }
  },
  methods: {
    async fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const data = await response.json()
      this.pokemonList = data;
      console.log(this.pokemonList);
    }
  }
}


</script>
<template>
  <slot name="title"/>
  <p>{{ counterTitle }}</p>
  <p>{{ count }}</p>
  <button @click="incrementCount">Increment</button>
  <br>
<ul>
  <li >{{pokemonList.name}}</li>
</ul>
  <button @click="fetchPokemon">Fetch Pokemon</button>
  <label for="incrementAmount">Increment for:</label>
  <input type="number" id="incrementAmount" :value="incrementAmount"
         @input="$emit('update:incrementAmount', +$event.target.value)"/>
</template>
