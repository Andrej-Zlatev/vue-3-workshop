<script>
export default {
  data() {
    return {
      count: 0,
      incrementAmount: 0,
      title:"",
    }
  },
  computed: {
    counterTitle: function () {
      if(this.count >= 20){
        return  this.title = "the number is higher than 20"
      }
    }
  },
  methods: {
    incrementCount() {
      this.count = this.count + this.incrementAmount
    }
  }}

</script>
<template>
  <h1>Counter</h1>
  <p>{{counterTitle}}</p>
  <p>{{count}}</p>
  <button @click="incrementCount">Increment</button>
  <br>
  <label for="incrementAmount">Increment for:</label>
  <input type="number" id="incrementAmount" v-model="incrementAmount" />main>
</template>
