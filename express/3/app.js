const express = require("express")
const app = express();
const port = 3000
const userData = require('./user-data.json')

app.get('/get-all-users', function (req, res) {
    console.log(typeof userData)
    res.status(200).send(userData);
});

app.get('/admins', function (req, res) {

    const adminsList = userData.filter(element => {
        return (element.role === 'admin')
    })

    res.status(200).send(adminsList);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})