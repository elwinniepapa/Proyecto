const PlayerModel = require("../../models/player.model");

const getPlayerByEmailService = async (reqEmail) => {
    try
    {
        const player = await PlayerModel.findOne({ email: reqEmail }, { password: 0}).exec();
        return player;
    }
    catch (error) {        
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getPlayerByEmailService;