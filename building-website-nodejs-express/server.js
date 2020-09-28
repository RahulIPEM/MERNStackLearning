const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const createError = require("http-errors");

const bodyParser = require("body-parser");

const FeedbackService = require("./services/FeedbackService");
const SpeakerService = require("./services/SpeakerService");

const feedbackService = new FeedbackService("./data/feedback.json");
const speakerService = new SpeakerService("./data/speakers.json");

const routes = require("./routes");
const { response, request } = require("express");

const app = express();
const port = 3000;

app.set("trust proxy", 1);

app.use(cookieSession({
    name: "session",
    keys: ["Ghdur687399s7w", "hhjjdf89s866799"]
}))

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.locals.siteName = "Rahul Meetups";
app.use(async (request, response, next) => {
    try {
        const names = await speakerService.getNames();
        response.locals.speakerNames = names;
        return next();
    } catch (error) {
        return next(error);
    }
})

app.use(express.static(path.join(__dirname, "./static/")));

app.use("/", routes({ feedbackService, speakerService }));

app.use((request, response, next) => {
    return next(createError(404, "file not found."));
})

app.use((err, request, response, next) => {
    response.locals.message = err.message;
    console.error(err);
    const status = err.status || 500;
    response.locals.status = status;
    response.status(status);
    response.render("error");
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
})