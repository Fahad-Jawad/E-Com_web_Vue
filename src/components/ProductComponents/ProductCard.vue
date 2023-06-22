<template>
  <div class="productCard">
    <img :src="img" />
    <h2>{{ name }}</h2>
    <h4>Price:${{ price }}</h4>
    <h3 class="attribute">Attributes</h3>
    <p>{{ attributes }}</p>
    <router-link :to="{ path: `/product/${id}` }">
      <button class="cartBtn" @click="viewProduct()">View</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
  price: number
  img: string
  attributes: string
}>()
function viewProduct() {
  $router.push(`/product/${this.id}`)
}
</script>

<style scoped>
.productCard {
  background-color: 'red';
  border: 2px solid cornflowerblue;
  margin: 1% 3%;
  height: min-content;
  padding: 1%;
  border-radius: 0.4rem;
  height: 470px;
}
.productCard img {
  width: 100% !important;
  height: 30%;
}
.productCard .attribute {
  background-color: cornflowerblue;
  color: white !important;
  width: fit-content;
  border-radius: 0.4rem;
  text-align: center;
  padding: 4% 20%;
  margin: 4% auto;
}
.productCard .attributeList ul {
  padding: 0;
  list-style: none;
}
.productCard .attributeList ul li {
  margin: 2% 0;
}
.productCard .cartBtn {
  width: 100%;
  margin: 5% auto;
  background-color: cornflowerblue;
  color: white !important;
  padding: 5%;
  border-color: transparent;
  border-radius: 0.4rem;
}
</style>
