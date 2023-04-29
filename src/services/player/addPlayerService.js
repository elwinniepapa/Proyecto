const PlayerModel = require("../../models/player.model");
const getRandomSuperheroIDService = require("../superhero/getRandomSuperheroIDService");
const getSuperheroDataService = require("../superhero/getSuperheroDataService");

const addPlayerService = async (request) => {
    try {
        const player = request.body;
        const newPlayer = new PlayerModel(player);
        newPlayer.idsuperhero = await getRandomSuperheroIDService();
        await newPlayer.save();
        superhero = await getSuperheroDataService(newPlayer.idsuperhero);        
        message = `Bienvenido ${newPlayer.username}, tu personaje asignado es: ${superhero.superheroName}`;
        return { message: `${message}`, statusCode: 201 };
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
};

module.exports = addPlayerService;