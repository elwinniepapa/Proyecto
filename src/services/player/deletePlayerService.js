const PlayerModel = require("../../models/player.model");

const deletePlayerService = async (request) => {
    try {
        const { id } = request.params;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const deletePlayer = await PlayerModel.deleteOne({_id: id});
            if(deletePlayer.deletedCount === 0){
                return { message: "El jugador no se encontró", statusCode: 404 }
            }
            return { message: "Jugador eliminado con éxito", statusCode: 201 };
        }
        return { message: "El jugador no se encontró" };
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = deletePlayerService;