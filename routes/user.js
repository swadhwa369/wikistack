const express = require('express');

const router = express.Router();

router.get("/", function(req, res, next) {
    res.send('go GET /user/');
})

router.post("/", function(req, res, next) {
    res.send('go POST /user/');
})

router.get("/add", function(req, res, next) {
    res.send('go GET /user/add');
})