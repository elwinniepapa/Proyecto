const { default: axios } = require('axios');
require('dotenv').config();

const getSuperheroDataService = async (id) => {
    try {
        url = `https://www.superheroapi.com/api.php/${process.env.API_TOKEN}/${id}`;
        const response = await axios.get(url);
        if (!response.data) return { message: "El superhéroe no se encontró" }
        const apiSuperhero = ({ idsuperhero: id, superheroName: response.data.name, realName: response.data.biography["full-name"], alignment: response.data.biography.alignment, powerstats: response.data.powerstats });
        return apiSuperhero;
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getSuperheroDataService;