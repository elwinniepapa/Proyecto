const getPlayerByNameService = require("../../services/player/getPlayerByNameService");

const playerNotFoundMiddleware = async (request, response, next) => {
    try {        
        const player = await getPlayerByNameService(request.body.username);
        if (!player) {
            response.status(404).json({ mesage: "El jugador ingresado no se encontró" });
        }        
        else {
            request.player = player
            next();
        }
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
};

module.exports = playerNotFoundMiddleware;