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
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <div class="quantity">
            <button class="primaryBtn" @click="decrese(item.id)">-</button>
            {{ item.quantity }}
            <button class="primaryBtn" @click="increse(item.id)">+</button>
          </div>
        </td>
        <td>{{ Math.round(item.price * item.quantity) }}</td>
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
const cartData = store.getters.getCartProducts
function increse(id) {
  store.dispatch('incrementQunatity', id)
}
function decrese(id) {
  store.dispatch('decrementQunatity', id)
}
</script>

<style scoped>
table,
th,
td {
  border: 2px solid cornflowerblue;
  border-collapse: collapse;
  border-radius: 10px;
  padding: 2%;
}
table {
  width: 100%;
}
.quantity {
  display: flex;
  align-items: center;
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
  width: 100%;
}
</style>
