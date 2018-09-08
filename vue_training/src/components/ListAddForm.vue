<template>
  <div class="myForm">
    <ul>
      <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
      <li 
        v-for="product in products" 
        :key="product.id"> {{ product.id }}. {{ product.name }} <button @click="removeProduct(product.id)">remove</button></li>
    </ul>
    <p v-if="!products.length">No products!</p>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <input 
      v-model="mProduct" 
      placeholder="New product name">
    <button @click="addProduct(mProduct)">Add product</button>
    <button @click="removeLast()">Remove last item</button>
  </div>
</template>

<script>
export default {
    props: {

    },

    data() { 
        return {
    name: 'ListAddForm',
            products: [{
          id: 0,
          name: 'Coffee'
        }, {
          id: 1,
          name: 'Pizza'
        },
        {
          id: 2,
          name: 'Kola'
        }]
    }
  },
  methods: {
    removeLast() {
          this.products.pop();
        },
    addProduct(mProduct) {
            this.products.push({
                id: this.products[this.products.length - 1].id + 1,
                name: mProduct });
        },
    removeProduct(idProduct) {
            this.products = this.products.filter(product => product.id != idProduct);
        }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
