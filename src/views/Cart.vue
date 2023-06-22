<template>
  <h2>Your Cart</h2>
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
  <h1>Total:Rs.0</h1>
  <button>Checkout</button>
  <router-link :to="{ path: `/` }">
    <button>Back</button>
  </router-link>
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
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
