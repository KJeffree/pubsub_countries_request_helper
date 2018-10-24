const PubSub = require('../helpers/pub_sub.js');

const ResultCountryView = function (container) {
  this.container =  container;
}

ResultCountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (event) => {
    const country = event.detail;
    this.render(country);
  })

  ResultCountryView.prototype.render = function (country) {
    this.container.innerHTML = "";
    const infoCountryName = document.createElement('h1');
    infoCountryName.textContent = country.name;
    this.container.appendChild(infoCountryName);

    const infoCountryFlag = document.createElement('IMG');
    infoCountryFlag.src = country.flag;
    this.container.appendChild(infoCountryFlag)

    const infoCountryRegion = document.createElement('h2');
    infoCountryRegion.textContent = 'Region:'
    this.container.appendChild(infoCountryRegion)

    const infoCountryRegionInfo = document.createElement('p');
    infoCountryRegionInfo.textContent = country.region;
    this.container.appendChild(infoCountryRegionInfo)

    const infoCountryLanguageTitle = document.createElement('h2');
    infoCountryLanguageTitle.textContent = 'Languages:'
    this.container.appendChild(infoCountryLanguageTitle);

    const infoCountryLanguage = document.createElement('ul')
    country.languages.forEach((language) => {
      const infoCountryLanguageItem = document.createElement('li')
      infoCountryLanguageItem.textContent = language.name;
      infoCountryLanguage.appendChild(infoCountryLanguageItem);
    })
    this.container.appendChild(infoCountryLanguage);
  };
};

module.exports = ResultCountryView;
