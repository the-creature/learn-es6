const axios = require('axios');

class StarWarsAPI {
  async getStarWarsMaleCharacters(type) {
    const url = `https://swapi.co/api/${type}/`;
    const res = await axios.get(url);
    const maleCharacters = res.data.results.map(person => {
      return person.gender === 'male' && person.name;
    });

    return maleCharacters.filter(Boolean);
  }
}

(async () => {
  const maleCharacters = new StarWarsAPI();
  maleCharacters
    .getStarWarsMaleCharacters('people')
    .then(value => console.log(value));
})();
