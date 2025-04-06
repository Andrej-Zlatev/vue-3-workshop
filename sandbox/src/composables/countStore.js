import {reactive, ref} from "vue";

export let countStore = reactive({
  count: 0
})
export let incrementCount = (incrementAmount) =>
  countStore.count = countStore.count + incrementAmount;


