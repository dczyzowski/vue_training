<template>
  <div id="app">
    <img 
      alt="Vue logo" 
      src="./assets/logo.png">
    <ListAddForm />
  </div>
</template>

<script>
import ListAddForm from './components/ListAddForm.vue'
import VeeValidate from 'vee-validate'
import Vue from 'vue'
import uuid from 'vue-uuid'
Vue.use(VeeValidate);
Vue.use(uuid);

export default {
  name: 'App',
  components: {
    ListAddForm
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
