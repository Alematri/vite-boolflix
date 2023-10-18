<script>
import Stars from './Stars.vue';

  export default{
  name: 'CustomCards',
  components:{
    Stars
  },
  data(){
    return{
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

  <div class="card">
    <img v-if="item.poster_path" :src="`http://image.tmdb.org/t/p/w300/${ item.poster_path }`" class="card-img-top">
    <img v-else src="/No-Image.png" alt="">

    <div class="card-body">
      <h5 class="card-title">{{ item.title || item.name }}</h5>
      <h6 class="card-title">{{ item.original_title || item.original_name }}</h6>

      <img class="flag" v-if="flags.includes(item.original_language)" :src="getImagePath(item.original_language)">
      <p v-else class="card-text">Lingua:{{ item.original_language }}</p>

      <p class="card-text">Voto: {{ item.vote_average }}</p>

      <Stars :vote="item.vote_average" />
    </div>
  </div>

</template>

<style>
  .flag{
    width: 30px;
  }
</style>