const PlayerModel = require("../../models/player.model");

const getAllPlayerService = async () => {
    try {
        const allPlayers = await PlayerModel.find();
        return allPlayers;
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getAllPlayerService;