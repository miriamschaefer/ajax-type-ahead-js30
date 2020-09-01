'use strict';

//API

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//Text input

const input = document.querySelector('.search');
let cities = [];
let city = {};
let search = [];

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

//function that adds commas to the population value
function addCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findCity() {
  let search = [];
  userSearch = input.value.toLowerCase();
  cities.filter((city) => {
    if (
      city.name.toLowerCase().includes(userSearch) ||
      city.state.toLowerCase().includes(userSearch)
    ) {
      search.push(city);
    }
  });
  renderSearch(search, '.suggestions');
}

function renderSearch(arr, selector) {
  let codeHTML = '';

  for (let item of arr) {
    codeHTML += ` <li>
      <span class="name">
        ${item.name}, ${item.state}
      </span>
      <span class="population">${addCommas(item.population)}</span>
    </li>`;
  }
  const element = document.querySelector(selector);
  element.innerHTML = codeHTML;
}

//Events

input.addEventListener('keyup', findCity);
input.addEventListener('change', findCity);
