<template>
  <div class="productPage">
    <h1>Product List</h1>
    <div class="productList">
      <div v-for="product in allProducts">
        <ProductCard
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :attributes="product.attributes"
          :img="product.img"
        />
      </div>
    </div>
    <router-link :to="{ path: `/cart` }">
      <button class="primaryBtn">View Cart</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import ProductCard from '@/components/ProductComponents/ProductCard.vue'
const count = ref(0)
const store = useStore()
const allProducts = store.getters.getProducts

onMounted(() => {
  console.log('st', store.getters.getProducts)
})
</script>

<style scoped>
.productPage {
  width: 100% !important;
}
.productList {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: min-content;
}
</style>
