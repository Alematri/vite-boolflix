<script>
    import axios from 'axios';
    import {store} from './assets/data/store';
    import Header from './components/Header.vue';
    import Wrapper from './components/Wrapper.vue';

  export default{
  name: 'App',
  components:{
    Header,
    Wrapper
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: store.apiParams
      })
        .then(res => {
          
          store.movie = res.data.results;
          console.log(res.store.movie);

        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted(){

  }
}

</script>

<template>
  <Header @startSearch="getApi" />
  <Wrapper /> 
  <Card />
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>