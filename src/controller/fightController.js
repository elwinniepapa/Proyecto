const fightService = require("../services/fight/fightService");

const fightController = async (request, response) => {
    const fightPlayer = await fightService(request);
    response.json(fightPlayer);
}

module.exports = {fightController};