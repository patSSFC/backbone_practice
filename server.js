const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1300;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'data')))

app.listen(port, function() {
    console.log("Listening on " + port);
});
