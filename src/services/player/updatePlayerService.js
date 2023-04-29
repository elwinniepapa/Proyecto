const PlayerModel = require("../../models/player.model");

const updatePlayerService = async (request) => {
    try {
        const { id } = request.params;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const playerByID = await PlayerModel.findById(id);
            const updatePlayer = request.body;
            if (!playerByID) {
                return { message: "El jugador no se encontró" };
            }
            playerByID.username = updatePlayer.username;
            playerByID.password = updatePlayer.password;
            playerByID.email = updatePlayer.email;
            playerByID.idsuperhero = updatePlayer.idsuperhero;
            await playerByID.save();
            return { message: "Jugador actualizado con éxito", statusCode: 201 };
        }
        return { message: "El jugador no se encontró" };
    }
    catch (error) {   
        if (error.code === 11000)
            if (error.keyValue.username != undefined)
                return { status: 400, mesage: "Estás intentando sobreescribir un usuario existente"};
            else if (error.keyValue.email != undefined)
                return { status: 400, mesage: "Estás intentando sobreescribir un correo existente"};
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = updatePlayerService;