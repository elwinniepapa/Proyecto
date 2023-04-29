const { default: axios } = require('axios');
require('dotenv').config();

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getSuperheroFromAPI = async () => {
    try {
        randomid = random(1, 731);
        url = `https://www.superheroapi.com/api.php/${process.env.API_TOKEN}/${randomid}`;
        const response = await axios.get(url);
        if (!response.data) return { message: "El superhéroe no se encontró" }
        const apiSuperhero = ({ idsuperhero: randomid, superheroName: response.data.name, realName: response.data.biography["full-name"], alignment: response.data.biography.alignment, powerstats: response.data.powerstats });        
        return apiSuperhero;
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

const getRandomSuperheroIDService = async () => {
    try {
        let newSuperhero = await getSuperheroFromAPI();
        //Los null en la API están como texto
        while ((newSuperhero.superheroName == 'null') || (newSuperhero.superheroName == '') || (newSuperhero.powerstats == 'null')
            || (newSuperhero.powerstats.intelligence == 'null') || (newSuperhero.powerstats.strength == 'null') || (newSuperhero.powerstats.speed == 'null')
            || (newSuperhero.powerstats.durability == 'null') || (newSuperhero.powerstats.power == 'null') || (newSuperhero.powerstats.combat == 'null')) {
            newSuperhero = await getSuperheroFromAPI();
        }
        return newSuperhero.idsuperhero;
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getRandomSuperheroIDService;