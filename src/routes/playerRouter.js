const express = require('express');
const { check } = require("express-validator");
const { addPlayerController, getAllPlayerController, getPlayerByIDController, updatePlayerController, deletePlayerController } = require('../controller/playerController');
const validatorMiddleware = require('../utils/middlewares/validatorMiddleware');
const existingPlayerMiddleware = require('../utils/middlewares/existingPlayerMiddleware');

const router = express.Router();

router.post(
    '/player',
    check("username")
        .notEmpty()
        .withMessage('El nombre de usuario no puede estar vacio')
        .isString()
        .withMessage("El nombre de usuario debe ser string"),
    check("email")
        .isEmail()
        .withMessage("Debe ser una dirección de correo electrónico válida"),
    check("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres")        
        .matches(/[a-z]/)
        .withMessage("La contraseña debe contener al menos una minúscula")
        .matches(/[A-Z]/)
        .withMessage("La contraseña debe contener al menos una mayúscula")
        .matches(/[0-9]/)
        .withMessage("La contraseña debe contener al menos un número"),        
    validatorMiddleware,
    existingPlayerMiddleware,
    addPlayerController);
router.get('/player', getAllPlayerController);
router.get('/player/:id', getPlayerByIDController);
router.put(
    '/player/:id', 
    check("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres")        
        .matches(/[a-z]/)
        .withMessage("La contraseña debe contener al menos una minúscula")
        .matches(/[A-Z]/)
        .withMessage("La contraseña debe contener al menos una mayúscula")
        .matches(/[0-9]/)
        .withMessage("La contraseña debe contener al menos un número"),        
    validatorMiddleware,     
    updatePlayerController);
router.delete('/player/:id', deletePlayerController);

module.exports = router;