// Install express server
const express = require('express');
const path = require('path');
const app = express();
// Serve only the static yes files form the dist directory
app.use(express.static(__dirname + '/dist/covid19-app'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/covid19-app/index.html'));
});
// Start the app by listening on the default Heroku
app.listen(process.env.PORT || 5050);