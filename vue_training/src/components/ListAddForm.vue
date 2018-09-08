<template>
  <div class="myForm">
    <ul>
      <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
      <li 
        v-for="product in products" 
        :key="product.id"> {{ product.name }} <button @click="removeProduct(product.id)">remove</button></li>
    </ul>
    <p v-if="!products.length">No products!</p>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <form @submit.prevent="onSubmit()">
        <input 
        v-validate="'required|min:3'"
        v-model="mProduct"
        name="mProduct">
        <button v-if="mProduct.length > 3">Add product</button>
        </form>
        <button @click="removeLast()">Remove last item</button> 
  </div>
</template>

<script>

export default {
  props: {},

  data() {
    return {
     mProduct: '',
      name: "ListAddForm",
      products: [
        {
          id: this.$uuid.v4(),
          name: "Coffee"
        },
        {
          id: this.$uuid.v4(),
          name: "Pizza"
        },
        {
          id: 2,
          name: "Kola"
        }
      ]
    };
  },
  methods: {
    removeLast() {
      this.products.pop();
    },
    onSubmit() {
      this.products.push({
        id: this.$uuid.v4(),
        name: this.mProduct
      });
    },
    removeProduct(idProduct) {
      this.products = this.products.filter(product => product.id != idProduct);
    }
  }
};
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
