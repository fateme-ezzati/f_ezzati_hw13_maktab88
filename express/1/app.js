const express = require("express")
const app = express();
const port = 3000

app.get('/', function (req, res) {
    res.status(200).send('Hello World');
});

app.get('*', function (req, res) {
    res.status(404).send('page not found!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})