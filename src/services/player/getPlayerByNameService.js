const PlayerModel = require("../../models/player.model");

const getPlayerByNameService = async (reqUsername) => {
    try
    {
        const player = await PlayerModel.findOne({ username: reqUsername }, { password: 0}).exec();
        return player;
    }
    catch (error) {        
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getPlayerByNameService;