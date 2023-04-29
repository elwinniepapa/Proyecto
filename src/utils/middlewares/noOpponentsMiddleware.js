const PlayerModel = require("../../models/player.model");

const noOpponentsMiddleware = async (request, response, next) => {
    try {
        const number = await PlayerModel.countDocuments();        
        if (number < 2) {
            response.status(404).json({ mesage: "No se han encontrado oponentes, te encuentras solo en este vasto mundo" });
        }
        else {            
            next();
        }
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
};

module.exports = noOpponentsMiddleware;