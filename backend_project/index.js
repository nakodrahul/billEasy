const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controller');
const app = express();
port = 3005;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
	extended: true
})
)

app.use('/', router);

app.listen(port, function () {
	console.log(`running on port ${port}`);
})
