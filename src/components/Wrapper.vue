<script>
  import { store } from '../assets/data/store';
  import Card from './partials/Card.vue';

export default{
  name: 'Wrapper',
  data(){
    return{
      store
    }
  },
  components:{
    Card
  }
}
</script>

<template>

  <div class="container my-5">
    <h1>Film</h1>
    <div class="row row-cols-4">

      <div
        v-for="item in store.movie"
        :key="item.id"
        class="card"
      >
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <h6 class="card-title">{{ item.original_title }}</h6>
          <p class="card-text">Lingua: {{ item.original_language }}</p>
          <p class="card-text">Voto: {{ item.vote_average }}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
</style>