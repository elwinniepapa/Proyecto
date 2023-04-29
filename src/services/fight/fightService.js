const Player = require("../../models/player.model");
const PlayerModel = require("../../models/player.model");
const getPlayerByNameService = require("../player/getPlayerByNameService");
const getSuperheroDataService = require("../superhero/getSuperheroDataService");
const updateScoreService = require("./updateScoreService");

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

async function getRandomPlayer() {
    const numItems = await PlayerModel.estimatedDocumentCount();
    const rand = Math.floor(Math.random() * numItems);
    const randomItem = await PlayerModel.findOne({}, { password: 0 }).skip(rand);
    return randomItem;
}

const fightService = async (request) => {
    try {        
        const player = request.player
        let opponent = await getRandomPlayer();
        while (opponent.username == player.username) {
            opponent = await getRandomPlayer();
        }
        const playersuperhero = await getSuperheroDataService(player.idsuperhero);
        const opponentsuperhero = await getSuperheroDataService(opponent.idsuperhero);
        playerScore = 0;
        opponentScore = 0;
        for (var i = 0; i < 6; i++) {
            playerStat = 0;
            opponentStat = 0;
            rand1 = random(1, 99);
            rand2 = random(1, 99);
            switch (i) {
                case 0:
                    playerStat = rand1 * playersuperhero.powerstats.intelligence;
                    opponentStat = rand2 * opponentsuperhero.powerstats.intelligence;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
                case 1:
                    playerStat = rand1 * playersuperhero.powerstats.strength;
                    opponentStat = rand2 * opponentsuperhero.powerstats.strength;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
                case 2:
                    playerStat = rand1 * playersuperhero.powerstats.speed;
                    opponentStat = rand2 * opponentsuperhero.powerstats.speed;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
                case 3:
                    playerStat = rand1 * playersuperhero.powerstats.durability;
                    opponentStat = rand2 * opponentsuperhero.powerstats.durability;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
                case 4:
                    playerStat = rand1 * playersuperhero.powerstats.power;
                    opponentStat = rand2 * opponentsuperhero.powerstats.power;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
                case 5:
                    playerStat = rand1 * playersuperhero.powerstats.combat;
                    opponentStat = rand2 * opponentsuperhero.powerstats.combat;
                    if (playerStat > opponentStat) { playerScore++ }
                    else { opponentScore++ }
                    break;
            }
        }
        if (playerScore > opponentScore) {            
            message = `${playersuperhero.superheroName} (${player.username}) vs ${opponentsuperhero.superheroName} (${opponent.username}) -> Tu oponente ha sido masacrado, puntaje final: ${playerScore} vs ${opponentScore}`;
            player.won = player.won + 1;
            opponent.lost = opponent.lost + 1;
        }
        else if (playerScore < opponentScore) {            
            message = `${playersuperhero.superheroName} (${player.username}) vs ${opponentsuperhero.superheroName} (${opponent.username}) -> Has recibido una paliza, puntaje final: ${playerScore} vs ${opponentScore}`;
            player.lost = player.lost + 1;
            opponent.won = opponent.won + 1;
        }
        else {            
            message = `${playersuperhero.superheroName} (${player.username}) vs ${opponentsuperhero.superheroName} (${opponent.username}) -> Empate, puntaje final: ${playerScore} vs ${opponentScore}`;
        }
        updateScoreService(player)
        updateScoreService(opponent)
        return { message: `${message}`, statusCode: 201 };
    }
    catch (error) {
        return { message: "Ocurrió un error :(", statusCode: 400 }
    }
};

module.exports = fightService;