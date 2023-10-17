<script>
  export default{
  name: 'CustomCards',
  props:{
    item: Object
  }
  }
</script>

<template>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ item.title || item.name }}</h5>
      <h6 class="card-title">{{ item.original_title || item.original_name }}</h6>
      <p class="card-text">Lingua: {{ item.original_language }}</p>
      <p class="card-text">Voto: {{ item.vote_average }}</p>
    </div>
  </div>

</template>

<style>
</style>