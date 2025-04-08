<script>
import BaseCounter from "@/components/BaseCounter.vue";

export default {
  name: "App",
  components: {
    BaseCounter,
  },
  data() {
    return {
      count: 0,
      incrementAmount: 0,
    }
  },
  methods: {}
}
</script>
<template>
  <BaseCounter
  >
    <template v-slot:title>
      <router-link to="about">About Page</router-link>
      <router-link to="/">Home Page</router-link>
      <router-view/>
      <h1>Counter</h1>
    </template>
  </BaseCounter>
</template>

<style>

</style>
