const axios = require('axios');

async function getStarWarsMaleCharacters(type) {
  const url = `https://swapi.co/api/${type}/`;
  const res = await axios.get(url);
  const data = await JSON.stringify(res.data.results);
  const results = JSON.parse(data);
  const maleCharacters = results.map(person => {
    return person.gender === 'male' && person.name;
  });

  console.log(maleCharacters.filter(Boolean));
}

getStarWarsMaleCharacters('people');
