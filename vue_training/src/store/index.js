import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
  //3/ It holds a state itself
  state: {
    products: {
      type: Object,
    }
  },
  //6/ And methods to update
  async fetchProducts() {
    this.state.products = await axios.get('http://ergast.com/api/f1/drivers.json').then(res => res.data);
  },
};

export default store;
