const Countries = require('./models/countries.js')
const SelectCountryView = require('./views/select_country_view.js')
const ResultCountryView = require('./views/result_country_view.js')



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#countries');
  const elementInfo = new SelectCountryView(selectElement);
  elementInfo.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const infoDiv = document.querySelector('#country');
  const countryInfo = new ResultCountryView(infoDiv);
  countryInfo.bindEvents();

});
