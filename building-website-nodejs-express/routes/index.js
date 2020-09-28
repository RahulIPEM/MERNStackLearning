const express = require("express");
const router = express.Router();

const speakerRoute = require("./speakers");
const feedbackRoute = require("./feedback");

module.exports = ({ speakerService, feedbackService }) => {
    router.get("/", async (request, response, next) => {
        try {
            const artwork = await speakerService.getAllArtwork();
            const topSpeakers = await speakerService.getList();
            return response.render("layout", { pageTitle: "Welcome", template: "index", topSpeakers, artwork });
        } catch (error) {
            return next(error);
        }
    });

    router.use("/speakers", speakerRoute(speakerService));
    router.use("/feedback", feedbackRoute(feedbackService));

    return router;
};