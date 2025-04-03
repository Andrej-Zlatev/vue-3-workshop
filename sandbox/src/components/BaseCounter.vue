<script>
export default {
  name: "BaseCounter",
  props: {
    incrementCount: {
      type:Function,
    },
    count:{
      type:Number,
    },
    incrementAmount:{
      type:Number,
    }
  },
  computed: {
    counterTitle() {
      return this.count >= 20 ? "The number is higher than 20" : "";
    }},
  }

</script>
<template>
  <slot name="title"/>
  <p>{{counterTitle}}</p>
  <p>{{count}}</p>
  <button @click="incrementCount">Increment</button>
  <br>
  <label for="incrementAmount">Increment for:</label>
  <input type="number" id="incrementAmount" :value="incrementAmount" @input="$emit('update:incrementAmount', +$event.target.value)" />
</template>
