<script>
import Stars from './Stars.vue';

  export default{
  name: 'CustomCards',
  components:{
    Stars
  },
  data(){
    return{
      isHovered: false,
      flags:['en', 'it']
    }
  },
  methods:{
    getImagePath(img){
      return new URL(`../../assets/img/${img}.png`, import.meta.url).href
    }
  },
  props:{
    item: Object
  }
  }
</script>

<template>
  <div class="card" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <img v-if="item.poster_path" :src="`http://image.tmdb.org/t/p/w300/${item.poster_path}`" class="card-img-top">
    <img v-else src="/No-Image.png" alt="">

    <div class="card-body" :class="{ active: isHovered }">
      <h5 class="card-title">{{ item.title || item.name }}</h5>
      <h6 class="card-title">{{ item.original_title || item.original_name }}</h6>

      <img class="flag" v-if="flags.includes(item.original_language)" :src="getImagePath(item.original_language)">
      <p v-else class="card-text">Lingua: {{ item.original_language }}</p>

      <p class="card-text">Voto: {{ item.vote_average.toFixed(1) }}</p>

      <Stars :vote="item.vote_average" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: calc(20% - 30px);
    margin: 5px;
    height: 350px;
    padding: 0;
    position: relative;

    .card-img-top {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-body {
      position: absolute;
      top: 0;
      display: none;
      background-color: rgba($color: #000000, $alpha: .7);
      color: white;
      width: 100%;
      height: 100%;
    }

    .card-body.active {
      display: block;
    }
  }

  .flag {
    width: 30px;
  }
</style>