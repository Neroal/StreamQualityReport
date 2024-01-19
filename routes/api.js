var express = require('express');
var router = express.Router();

var CONFIGURATION = require('../public/javascripts/configuration');
var StreamQualityReport = require('../public/javascripts/stream-quality-report');
const streamQualityReport = new StreamQualityReport();

const TEST_SERVER_URL = 'https://httpbin.org/post';

router.get('/get-stream-quality-list', async (req, res) => {
    try {
        const { SERVER_URL, DURATION, CHANNELS } = CONFIGURATION.RTMP_CONFIG;
        const streamQualityList = await streamQualityReport.requestStreamQualityList(TEST_SERVER_URL, DURATION, CHANNELS);

        res.json(streamQualityList.length);
    } catch (error) {
        console.log('Error get-stream-quality-list:', error);

        res.status(500).json({ error: 'Internal Server Error!'});
    }
})

module.exports = router;
