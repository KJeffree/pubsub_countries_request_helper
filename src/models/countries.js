const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Countries = function () {
  this.countries = [];
}

Countries.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((countryData) => {
    this.countries = countryData;
    PubSub.publish('Countries:countries-loaded', this.countries);
  })
}

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectCountryView:change', (event) => {
    const selectedCountry = event.detail;
    this.publishCountryInfo(selectedCountry);
  })
};

Countries.prototype.publishCountryInfo = function(countryIndex) {
  const selectedCountry = this.countries[countryIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
}


module.exports = Countries;
