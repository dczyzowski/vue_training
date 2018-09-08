<template>
  <div id="app">
    <img 
      alt="Vue logo" 
      src="./assets/logo.png">
    <product-list :products="sharedState.products"></product-list>
    <add-product @add-product="onAddProduct"></add-product>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import store from './store/'


export default {
  name: 'App',
  components: {
    ProductList,
    AddProduct
  },
  created() {
    store.fetchProducts();
  },
  data() {
    //3/ 3. Instead of just products we have to add reference to whole state
    return {
      sharedState: store.state
    }
  },
  methods: {
    //3/ 5. Handler is using store
    onAddProduct(product) {
      store.addProduct(product);
    }
  }
}
</script>

<style>
</style>
