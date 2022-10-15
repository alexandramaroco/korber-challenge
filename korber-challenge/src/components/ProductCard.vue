<template>
    <div class="card">
        <div class="card-title">
            {{ product.name }}
        </div>
        <div class="card-body">
            <!--<i class="icofont-10x icofont-{{ product.thumbnail }}"></i>
            <img src="{{ product.thumbnail }}" alt="{{ product.title }}" width="50" height="50">-->
            <form>
            <div class="row">
                <div class="cell">
                <label>Item:</label>
                </div>
                <div class="cell">
                <em>{{ product.title }}</em>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Category:</label>
                </div>
                <div class="cell">
                <em>{{ product.category.charAt(0).toUpperCase() + product.category.slice(1) }}</em>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Brand:</label>
                </div>
                <div class="cell">
                <em>{{ product.brand }}</em>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Stock:</label>
                </div>
                <div class="cell">
                <em>{{ product.stock }}</em>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Price:</label>
                </div>
                <div class="cell">
                €{{ product.price.toFixed(2) }}
                </div>
            </div>
            <div class="row">
                <div class="cell">
                <label>Quantity:</label>
                </div>
                <div class="cell">
                <input type="number" v-model.number="quantity">
                </div>
            </div>
            </form>
        </div>
        <div class="card-footer">
            <button @click="addToCart(product.id, quantity)" class="btn btn-light">
            Add to cart
            </button>
        </div>
    </div>
</template>

<script>

export default {
  props: ['product', 'addToCart'],
  data () {
    return {
      quantity: 0
    }
  }
}

</script>
