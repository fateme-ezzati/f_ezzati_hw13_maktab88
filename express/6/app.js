const express = require("express")
const app = express();
const path = require("path");
const port = 3000


app.get("/page-1", function (req, res) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    console.log(fullUrl)
    res.sendFile(path.join(__dirname, "views/page-1.html"));

});

// app.get('/page', (req, res, next) => {
//     // Show some content to the user
//     let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})