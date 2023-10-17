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
    getApi(type){
      axios.get(store.apiUrl + type, {
        params: store.apiParams
      })
        .then(res => {  
          store[type] = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    startSearch(){
      this.getApi('movie')
      this.getApi('tv')
    }
  },
  mounted(){

  }
}

</script>

<template>
  <Header @startSearch="startSearch" />
  <Wrapper title="Film" type="movie" />
  <Wrapper title="Serie TV" type="tv" />
  <CustomCards />
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>