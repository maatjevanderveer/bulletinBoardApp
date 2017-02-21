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
		title: "this is the title",
		body: "this is the body"
	}
	Messages.create(oneMessage)
})
.catch( (error) => console.log(error) );

// EXPORT MODEL (IN THIS CASE TO APP.JS)
module.exports = {
	db: db,
	Messages: Messages
}