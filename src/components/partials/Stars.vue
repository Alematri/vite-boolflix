<script>
  export default{
  name: 'Stars',
  props:{
    vote: Number
  },
  computed:{
    rating(){
      return Math.ceil(this.vote / 2);
    }
  }
}
</script>

<template>
  <div>
    <i
      v-for="i in 5"
      :key="i"
      class="fa-star"
      :class="(i <= rating) ? 'fa-solid' : 'fa-regular'"
      ></i>
  </div>
</template>

<style>
</style>