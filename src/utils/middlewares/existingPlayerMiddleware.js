const getPlayerByEmailService = require("../../services/player/getPlayerByEmailService");
const getPlayerByNameService = require("../../services/player/getPlayerByNameService");

const existingPlayerMiddleware = async (request, response, next) => {
    try {
        const player = request.body;        
        if (await getPlayerByNameService(player.username)) {            
            response.status(400).json({ mesage: "El nombre de usuario ya se encuentra registrado" });
        }
        else if(await getPlayerByEmailService(player.email)) {
            response.status(400).json({ mesage: "El correo ya se encuentra registrado" });
        }
        else {
            next();
        }
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
};

module.exports = existingPlayerMiddleware;

