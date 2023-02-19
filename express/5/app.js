const express = require("express")
const app = express();
const path = require("path");
const port = 3000

app.get("/page-1", function (req, res) {
    res.sendFile(path.join(__dirname, "views/page-1.html"));
});

app.get("/page-2", function (req, res) {
    res.sendFile(path.join(__dirname, "views/page-2.html"));
});

app.get("/page-3", function (req, res) {
    res.sendFile(path.join(__dirname, "views/page-3.html"));
});

app.get("/page-4", function (req, res) {
    res.sendFile(path.join(__dirname, "views/page-4.html"));
});

app.get("/page-5", function (req, res) {
    res.sendFile(path.join(__dirname, "views/page-5.html"));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})