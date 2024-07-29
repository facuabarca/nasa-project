const express = require("express");

const planetsRouter = require("./planets/planets.router");
const launcherRouter = require("./launches/launches.router");

const api = express.Router();
api.use('/planets',planetsRouter);
api.use('/launches',launcherRouter);

module.exports = api;