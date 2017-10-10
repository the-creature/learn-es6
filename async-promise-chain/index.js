const axios = require('axios');

async function getStarWarsMaleCharacters(type) {
  const url = `https://swapi.co/api/${type}/`;
  const res = await axios.get(url);
  const maleCharacters = res.data.results.map(person => {
    return person.gender === 'male' && person.name;
  });

  return maleCharacters.filter(Boolean);
}

getStarWarsMaleCharacters('people').then(value => console.log(value));
