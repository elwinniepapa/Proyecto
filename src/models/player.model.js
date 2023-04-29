const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  idsuperhero: {
    type: Number,
    required: true,
  },
  won: {
    type: Number,
    default: 0
  },
  lost: {
    type: Number,
    default: 0
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;