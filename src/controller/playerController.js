const addPlayerService = require("../services/player/addPlayerService");
const deletePlayerService = require("../services/player/deletePlayerService");
const getAllPlayerService = require("../services/player/getAllPlayerService.JS");
const getPlayerByIDService = require("../services/player/getPlayerByIDService.JS");
const updatePlayerService = require("../services/player/updatePlayerService");


const addPlayerController = async (request, response) => {
    const addPlayer = await addPlayerService(request);
    response.json(addPlayer);
}

const getAllPlayerController = async (request, response) => {
    const allPlayers = await getAllPlayerService();
    response.json(allPlayers);
}

const getPlayerByIDController = async (request, response) => {
    const playerByID = await getPlayerByIDService(request);
    response.json(playerByID);
}

const updatePlayerController = async (request, response) => {
    const player = await updatePlayerService(request);
    response.json(player);
}

const deletePlayerController  = async (request, response) => {
    const player = await deletePlayerService(request);
    response.json(player);
}

module.exports = {addPlayerController, getAllPlayerController, getPlayerByIDController, updatePlayerController, deletePlayerController};