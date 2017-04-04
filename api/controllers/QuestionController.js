/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	answerCount: function (req, res) {
		console.log(req);
		console.log(res);
		return res.send('Hi, there frank!');
	}

};
