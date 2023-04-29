const express = require('express');
const logMiddeware = require('../utils/middlewares/logMiddleware');
const playerRouter = require('../routes/playerRouter');
const fightRouter = require('../routes/fightRouter');
const server = express();

server.use(express.json());

server.use(logMiddeware);

server.get('/', (request, response) => {
    response.send('El servidor está escuchando')
})

server.use('/api', playerRouter);
server.use('/api', fightRouter);

module.exports = server;