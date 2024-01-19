var express = require('express');
var router = express.Router();
var StreamQualityReport = require('../public/javascripts/stream-quality-report');


/* GET home page. */
router.get('/', async function (req, res, next) {
	res.render('index', { title: 'Stream Qualtiy Report' });

	const streamQualityReport = new StreamQualityReport();
	streamQualityReport.Initialize();
});

module.exports = router;
