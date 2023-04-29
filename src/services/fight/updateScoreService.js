const PlayerModel = require("../../models/player.model");

const updateScoreService = async (player) => {
    try {        
        if (player.id.match(/^[0-9a-fA-F]{24}$/)) {
            await player.save();
            return { message: "Jugador actualizado con éxito", statusCode: 201 };
        }
        return { message: "El jugador no se encontró" };
    }
    catch (error) {   
        if (error.code === 11000)
            if (error.keyValue.username != undefined)
                return { status: 400, mesage: "El nombre de usuario ya se encuentra registrado"};
            else if (error.keyValue.email != undefined)
                return { status: 400, mesage: "El correo ya se encuentra registrado"};
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
}

module.exports = updateScoreService;