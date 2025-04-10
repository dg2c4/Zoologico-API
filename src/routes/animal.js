// Validar el Token de seguridad
const verifyToken = require('./validate_token');

const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animal");
//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar todos los animales
router.get("/animals", verifyToken, (req, res) => {
    animalSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;