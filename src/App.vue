<script>
    import axios from 'axios';
    import {store} from './data/store.js';
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
}

</script>

<template>
  <Header />
  <Wrapper /> 
  <Card />
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>