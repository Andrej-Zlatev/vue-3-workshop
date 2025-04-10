import {defineStore} from "pinia";

export const useCountStore = defineStore('countStore', {
  state:() => ({newCount: 0}),
  actions: {},
  getters: {}
})
