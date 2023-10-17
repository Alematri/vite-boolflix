import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams:{
    api_key: '249aa30a896e510e8652aa6d37e53323',
    language: 'it-IT',
    query: '',
  },
  movie: [],
  tv: []
});