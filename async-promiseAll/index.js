const axios = require('axios');

class StarWarsAPI {
  async getStarWarsAPI(type) {
    const url = `https://swapi.co/api/${type}/`;
    const res = await axios.get(url);
    if (res.status !== 200) throw new Error(res.message);
    return res;
  }
}

(async () => {
  try {
    const api = new StarWarsAPI();
    const [people, planets] = await Promise.all([
      api.getStarWarsAPI('people'),
      api.getStarWarsAPI('planets'),
    ]);

    const maleCharacters = people.data.results.map(person => {
      return person.gender === 'male' && person.name;
    });

    console.log(planets.data.results.map(planet => planet.name));
    console.log(maleCharacters.filter(Boolean));

    return maleCharacters.filter(Boolean);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
})();
