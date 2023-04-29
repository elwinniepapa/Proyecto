const PlayerModel = require("../../models/player.model");

const getPlayerByIDService = async (request) => {
    try {
        const { id } = request.params;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const player = await PlayerModel.findById(id);            
            if (!player) {
                return { message: "El jugador no se encontró" };
            }
            return player;
        }
        return { message: "El jugador no se encontró" };
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = getPlayerByIDService;