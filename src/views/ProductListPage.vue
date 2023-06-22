<template>
  <div>
    <h1>Product List</h1>
    <div class="productList">
      <div v-for="product in allProducts">
        <ProductCard
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :attributes="product.attributes"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import ProductCard from '../components/ProductComponents/ProductCard.vue'
const count = ref(0)
const store = useStore()
const allProducts = store.state.products

onMounted(() => {
  console.log('st', store.state.products)
})
</script>

<style scoped>
.productList {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  height: min-content;
}
</style>
