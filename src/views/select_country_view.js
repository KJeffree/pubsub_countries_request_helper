const PubSub = require('../helpers/pub_sub.js');

const SelectCountryView = function(element) {
  this.element = element;
}

SelectCountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (event) => {
  const allCountries = event.detail;
  this.populate(allCountries);
  })

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectCountryView:change', selectedIndex);
  })
};

SelectCountryView.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectCountryView;
