//- JAVASCRIPT CODE TO COMMUNICATE WITH DATABASE BY USING SEQUELIZE //-

// SET UP CONNECTION WITH DATABASE
const Sequelize = require('sequelize')
const db = new Sequelize('bulletinboard', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	dialect: 'postgres'
}); // ('database', 'username', 'password')

// DEFINE MODEL 
var Messages = sequelize.define('messages', {
	title: Sequelize.STRING,
	body: Sequelize.STRING
});