<template>
  <div v-if="store.state.currentProduct">
    <img :src="store?.state?.currentProduct?.img" alt="" />
    <h1>{{ store.state.currentProduct?.name }}</h1>
    <h2>${{ store.state.currentProduct?.price }}</h2>
    <p>{{ store.state.currentProduct?.attributes }}</p>
    <button @click="addToCart()">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRoute()
let id: string | string[] = ''

onMounted(() => {
  id = router.params.id
  store.dispatch('getProduct', id)
})
function addToCart() {
  store.dispatch('addToCart', id)
}
</script>

<style scoped lang="scss">
img {
  width: 50%;
}
</style>
