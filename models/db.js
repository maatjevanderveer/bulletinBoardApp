//- JAVASCRIPT CODE TO COMMUNICATE WITH DATABASE BY USING SEQUELIZE //-

// SET UP CONNECTION WITH DATABASE
const Sequelize = require('sequelize')
const db = new Sequelize('bulletinboard', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	dialect: 'postgres'
}); // ('database', 'username', 'password')

// DEFINE MODEL 
const Messages = db.define('messages', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	body: {
		type:Sequelize.STRING,
		allowNull: false,
	}
});

// CREATE TABLE
db.sync({
	force: true				// will drop tables before recreating them
})
.then(function(someParameter) {
	const oneMessage = {
		title: "Cat Ipsum",
		body: "Cat not kitten around eat owner's food or poop on grasses so present belly, scratch hand when stroked. Where is my slave?"
	}
	const anotherMessage = {
		title: "Another Cat Ipsum",
		body: "I'm getting hungry. Destroy couch chirp at birds so lick the curtain just to be annoying and howl on top of tall thing yet immediately regret falling into bathtub yet cough furball sit by the fire."
	}
	Messages.create(oneMessage)
	Messages.create(anotherMessage)
})
.catch( (error) => console.log(error) );

// EXPORT MODEL (IN THIS CASE TO APP.JS)
module.exports = {
	db: db,
	Messages: Messages
}