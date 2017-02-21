const express = require('express');
const app = express();
const db = require(__dirname + '/models/db.js')

app.get('/ping', function (request, response) {
	response.send('pong')
});

app.get('/getmessage', function(request, response) {
	db.Messages.findAll()
	.then((allMessages) => {
		console.log('this logs all messages')
		console.log(allMessages)
		response.send(allMessages)
	})
})

app.listen(3000, () => {
	console.log('the server is running on localhost:3000')
});
