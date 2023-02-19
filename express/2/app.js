const express = require("express")
const app = express();
const port = 3000

app.get('/', function (req, res) {
    res.status(200).send('root route');
});

app.get('/home', function (req, res) {
    res.status(200).send('home route');
});

app.get('/about', function (req, res) {
    res.status(200).send('about route');
});

app.get('/contact', function (req, res) {
    res.status(200).send('contact route');
});


app.get('*', function (req, res) {
    res.status(404).send('not found!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})