<template>
  <div class="container">
    <h2 class="topHeading">Your Cart</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
      </tr>
      <tr v-for="item in cartData">
        <td>{{ item.id }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </table>
    <h3>Total:Rs.0</h3>
    <button class="primaryBtn">Checkout</button>
    <router-link :to="{ path: `/` }">
      <button class="primaryBtn">Back</button>
    </router-link>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const cartData = store.state.cart
</script>

<style scoped>
table,
th,
td {
  border: 2px solid cornflowerblue;
  border-collapse: collapse;
  border-radius: 10px;
}

.topHeading {
  font-size: xx-large;
  color: cornflowerblue;
  text-align: center;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
