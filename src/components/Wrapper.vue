<script>
  import { store } from '../assets/data/store';
  import CustomCards from './partials/CustomCards.vue';

export default{
  name: 'Wrapper',
  props:{
    title: String,
    type: String
  },
  data(){
    return{
      store
    }
  },
  components:{
    CustomCards
  }
}
</script>

<template>

  <div class="container my-5">
    <h1>{{ title }}</h1>
    <div class="row row-cols-4">

      <CustomCards
        v-for="item in store[type]"
        :key="item.id"
        class="card"
        :item= "item"
      />

    </div>

  </div>

</template>

<style lang="scss" scoped>
</style>