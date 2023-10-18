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
    <h1 v-if="store[type].length > 0">{{ title }}</h1>
    <div class="row">

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
  h1{
    color: white;
  }
</style>