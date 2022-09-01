const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/", (request, response) => response.send("images!"));

module.exports = router;
