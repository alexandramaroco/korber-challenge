<template>
  <main class="wrapper">
      <h1>Products</h1>

      <div class="card-container">
        <Pagination v-model="page" :records="500" :per-page="25" @paginate="myCallback"/>
        <ProductCard
          v-for="product in inventory"
          :key="product.id"
          class="card"
          :product="product"
          :addToCart="addToCart"/>
      </div>
    </main>
</template>

<script>
import Pagination from 'v-pagination-3'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  data () {
    return {
      page: 1
    }
  },
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard,
    Pagination
  }
}
</script>
