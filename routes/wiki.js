const express = require('express');
const morgan = require("morgan");
const addPage = require('../views/addPage');
const router = express.Router();
var app = express();

router.get("/", function(req, res, next) {
    res.send('go GET /wiki/');
})

router.post("/", function(req, res, next) {
    res.send('go POST /wiki/');
})

router.get("/add", function(req, res, next) {
    res.send(addPage());
})