var express = require('express');
var router = express.Router();

const list = [
	{
		id: 1,
		name: 'BTCB02',
		type: 'RTMP',
		topiq_nrs: [
			0.520948604742686
		],
		topiq_nr_flives: [
			0.6842619167433844
		],
		topiq_nr_spqas: [
			0.518614536192682
		]
	},
	{
		id: 2,
		name: 'BTCB02m',
		type: 'RTMP',
		topiq_nrs: [
			0.530948634742686
		],
		topiq_nr_flives: [
			0.7542619167433844
		],
		topiq_nr_spqas: [
			0.428614536192681
		]
	},
	{
		id:3,
		name: 'BTCB03',
		type: 'RTMP',
		topiq_nrs: [
			0.530948634742686
		],
		topiq_nr_flives: [
			0.7542619167433844
		],
		topiq_nr_spqas: [
			0.428614536192681
		]
	},
	{
		id: 4,
		name: 'BTCB03m',
		type: 'RTMP',
		topiq_nrs: [
			0.530948634742686
		],
		topiq_nr_flives: [
			0.7542619167433844
		],
		topiq_nr_spqas: [
			0.428614536192681
		]
	},
	{
		id: 5,
		name: 'BTCB04',
		type: 'RTMP',
		topiq_nrs: [
			0.530948634742686
		],
		topiq_nr_flives: [
			0.7542619167433844
		],
		topiq_nr_spqas: [
			0.428614536192681
		]
	}
]

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { 
		title: 'Stream Qualtiy Report',
		list: list
 	});
});

module.exports = router;
