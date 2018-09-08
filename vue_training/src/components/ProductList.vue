<template>
  <div>
    <ul>
      <li v-for="p in products.MRData.DriverTable.Drivers" :key="p.driverId">{{ p.givenName }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProductList",
    props: {
      products: {
        type: Object
      }
    }
  }
</script>

<style scoped>
</style>
