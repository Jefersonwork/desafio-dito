const express = require("express");

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use("/api", router);

    //TODO Routes
    const eventService = require("../api/eventService");
    eventService.register(router, "/events");
}