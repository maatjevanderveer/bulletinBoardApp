const express = require('express');
const app = express();
const db = require(__dirname + '/models/db.js')
const bodyparser = require('body-parser')

// VIEW ENGINE SETUP
app.set('view engine', 'pug'); // pug is defined as the view engine in the express application
app.set('views', './views') // this defaults to the view directory in the application root directory

// MIDDLEWARE
app.use(express.static('static'));
//FOR ALL THE ROUTING MAKE USE OF BODYPARSER --> Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. 
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//ROUTING
app.get('/ping', function (request, response) {
	response.send('pong')
});

app.get('/', function (request, response) {
	response.render('index')
})

app.post('/newmessage', function(request, response) {
	
	db.Messages.create({
		title: request.body.newTitle,
		body: request.body.newBody
	}).then( (newMessage) =>{
		console.log(newMessage)
		response.redirect('/messageboard')
	})
	// connect to database
	// 
})

app.get('/messageboard', function(request, response) {
	db.Messages.findAll()
	.then((allMessages) => {
		//const allTitles = []
		console.log(allMessages[0].dataValues)

		// for (var i = 0; i < allMessages.length; i++) {
		// 	allTitles.push(allMessages[i])
		// }
		// response.send(allTitles)
		response.render('messageboard', {allMessages:allMessages})
		//console.log('this logs all messages')
		//console.log(allTitles)
		
	})
})

// app.get('/messageboard', function (request, response) {
// 	response.render('messageboard')
// })

app.listen(3000, () => {
	console.log('the server is running on localhost:3000')
});
