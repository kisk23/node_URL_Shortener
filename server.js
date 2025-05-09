const express = require("express");
const mongoose = require("mongoose")
const shortUrl = require("./models/shortUrl")
const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));


const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.get("/", async(req, res) => {
    try {
        const shortUrls = await shortUrl.find().sort({ createdAt: -1 }); // Add await
        res.render("index", { shortUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
app.post("/shortUrls", async(req, res) => {
    await shortUrl.create({
        full: req.body.fullUrl
    })
    res.redirect("/")


})
app.get("/:shortUrl", async(req, res) => {
    try {
        const url = await shortUrl.findOneAndUpdate({ short: req.params.shortUrl }, { $inc: { clicks: 1 } });
        if (!url) return res.sendStatus(404);
        res.redirect(url.full);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.listen(port, (error) => {
    if (error) {
        console.log("error in server  " + error)
    }
    console.log("server is up on port " + port)
})