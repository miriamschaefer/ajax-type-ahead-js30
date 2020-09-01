'use strict';

//API

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//Text input

const input = document.querySelector('.search');
let cities = [];
let city = {};

let userSearch = '';

fetch(endpoint)
  .then((response) => response.json())
  // .then((data) => cities.push(...data));

  .then((data) => {
    for (let item of data) {
      city = {
        name: item.city,
        state: item.state,
        population: item.population,
      };
      cities.push(city);
    }
  });

function findCity() {
  userSearch = input.value;
  return cities.filter((city) => {
    return city.name.match(userSearch) || city.state.match(userSearch);
  });
}

//Events

input.addEventListener('keyup', findCity);
input.addEventListener('change', findCity);
