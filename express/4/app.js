const express = require("express")
const app = express();
const path = require("path");
const port = 3000

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/picture", function (req, res) {
    res.sendFile(path.join(__dirname, "views/assets/Jungle-Rot.jpg"));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})