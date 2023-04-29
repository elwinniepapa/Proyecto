const express = require('express');
const { fightController } = require('../controller/fightController');
const playerNotFoundMiddleware = require('../utils/middlewares/playerNotFoundMiddleware');
const noOpponentsMiddleware = require('../utils/middlewares/noOpponentsMiddleware');

const router = express.Router();

router.post('/fight', playerNotFoundMiddleware, noOpponentsMiddleware, fightController);

module.exports = router;