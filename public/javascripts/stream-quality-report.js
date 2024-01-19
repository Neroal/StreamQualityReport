const CRON = require('./cron')
const CONFIGURATION = require('./configuration');
const AXIOS = require('axios')

class StreamQualityReport {

    constructor() {
        this.cronJob = null;
    }

    Initialize() {
        const config = CONFIGURATION.RTMP_CONFIG;

        if (this.cronJob) {
            CRON.StopJob(this.cronJob);
        }
        // this.cronJob = CRON.StartJob(() => this.requestStreamQualityList(config.SERVER_URL, config.DURATION, config.CHANNELS));

        // 測試Request
        this.cronJob = CRON.StartJob(() => this.requestStreamQualityList('https://httpbin.org/post', 3, config.CHANNELS));
    }

    onStreamQualityListUpdate(streamQualityList) {
        console.log('onStreamQualityListUpdate:', streamQualityList.length);
    }

    async requestStreamQualityList(serverURL, duration, channels) {
        const promises = channels.map((channel) => {
            return AXIOS.post(serverURL, {
                url: channel,
                duration: duration
            })
        })

        try {
            const streamQualityList = await Promise.all(promises);
            this.onStreamQualityListUpdate(streamQualityList);
        } catch (e) {
            console.warn(e);
        }

    }
}

module.exports = StreamQualityReport;