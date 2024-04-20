const express = require("express");
const productsControlle = require("../controllers/shop.livingroom.controller");
const pool = require("../database/shop.database");

const routes = express.Router();

//pool.end().then(()=> console.log("Connection closed"));//close connection

routes
.get('/livingRoom', productsControlle.getAllLivingRoomProducts)
.post('/addLivingRoomProducts', productsControlle.addLivingRoomProducts)
.delete('/deleteLivingRoomProduct/:id', productsControlle.deleteLivingRoomProduct)

module.exports = routes;

