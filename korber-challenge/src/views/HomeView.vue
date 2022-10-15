<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="splash-container">
        <div class="splash">
          <h1>Everything You Need</h1>
        </div>
      </div>

      <main class="wrapper">

        <h2>Recommended</h2>

        <div class="recommended">

          <ProductCard
          v-for="product in inventory.slice(0,3)"
          :key="product.id"
          class="card"
          :product="product"
          :addToCart="addToCart"
          />

        </div>
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  props: ['inventory', 'addToCart'],
  components: {
    /* HelloWorld */
    ProductCard
  }
}

</script>
