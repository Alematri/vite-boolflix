<script>
    import axios from 'axios';
    import {store} from './assets/data/store';
    import Header from './components/Header.vue';
    import Wrapper from './components/Wrapper.vue';

  export default{
  name: 'App',
  components:{
    Header,
    Wrapper,
  },
  data(){
    return{
      store,
      displayMovie: false,
      displayTv: false 
    }
  },
  methods:{
    getApi(type, isPopular = false){
      const apiUrl = !isPopular ? store.apiUrl + type : 'https://api.themoviedb.org/3/movie/popular';
      
      axios.get(apiUrl, {
        params: store.apiParams
      })
      .then((res) => {
          store[type] = res.data.results;
          if (res.data.results && res.data.results.length > 0) {
            if (type === 'movie') {
              this.displayMovie = true;
            } else if (type === 'tv') {
              this.displayTv = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    startSearch(){
      store.movie =[];
      store.tv=[];
      if(store.type === ''){
        this.getApi('movie')
        this.getApi('tv')
      }else{
        this.getApi(store.type)
      }
    }
  },
  mounted(){
    this.getApi('movie', true)
  }
}

</script>

<template>
  <Header @startSearch="startSearch" />
  <Wrapper title="Film" type="movie" v-if="displayMovie" />
  <Wrapper title="Serie TV" type="tv" v-if="displayTv" />
</template>

<style lang="scss">

  @use './scss/main.scss';

  body{
    background-color: black;
  }
</style>