<script>

import { store } from '../assets/data/store';

export default{
  name: 'Header',
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <header class="d-flex justify-content-between m-3">

    <div class="logo">
      <img src="/logo-boolflix.png">
    </div>

    <div class="d-flex">
      <input @keyup.enter="$emit('startSearch')" v-model.trim="store.apiParams.query" class="form-control" type="text" placeholder="Cerca un film">

      <select class="form-select ms-3">
        <option value="">All</option>
        <option value="movie">Film</option>
        <option value="tv">Serie TV</option>
      </select>

      <button @click="$emit('startSearch')" class="btn btn-danger ms-3">Search</button>

    </div>

  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 50px;
    .logo{
      height: 100%;
      img{
        height: 100%;
      }
    }
  }
</style>