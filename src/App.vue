<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style>
#app {
  width: 100%;
  display: flex;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 0 !important;
  display: none !important;
}

.primaryBtn {
  display: flex;
  justify-content: center;
  margin: 5% auto;
  background-color: cornflowerblue;
  color: white;
  padding: 2% 5%;
  border-color: transparent;
  border-radius: 0.4rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
button {
  cursor: pointer;
}
</style>
