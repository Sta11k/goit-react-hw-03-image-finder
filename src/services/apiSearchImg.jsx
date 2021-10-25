import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23145424-17de0e2191faefedd106abc58';

axios.defaults.baseURL = BASE_URL;

// // import { Component } from 'react';
// // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

// const getImages = async (searchQuery, page) => {};

// axios
//   .get('&{BASE_URL}')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
