<script  >
import BaseCounter from "@/components/BaseCounter.vue";
export default {
  name: "App",
  components: {
    BaseCounter,
  },
  data(){
    return {
      count: 0,
      incrementAmount: 0,
    }
  },
  methods: {
    incrementCount() {
      this.count = this.count + this.incrementAmount
    }
  }
}
</script>
<template>
  <BaseCounter :incrementCount="incrementCount" :count="count" v-model:incrementAmount="incrementAmount"   >
    <template v-slot:title>
     <h1>Counter</h1>
    </template>
    </BaseCounter>
</template>

<style  >

</style>
