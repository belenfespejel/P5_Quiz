var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const {models} = require ('../public/models/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'BELEN FERNANDEZ DE TORO ESPEJEL' });
});
/* GET quizzes page. */
router.get('/quizzes', function(req, res, next) {

	var quizzes = [];
	models.quiz.findAll().each(quiz => {
		console.log(quiz.question);
		console.log(quiz.answer);
		quizzes.push(quiz);
		console.log(`${quizzes.length}`);
	}).then(() => {
		res.render('quizzes', {quizzes: quizzes});
	})	  
});
module.exports = router;
