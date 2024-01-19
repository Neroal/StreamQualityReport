const AXIOS = require('axios')

class StreamQualityReport {

    async requestStreamQualityList(serverURL, duration, channels) {
        const promises = channels.map((channel) => {
            return AXIOS.post(serverURL, {
                url: channel,
                duration: duration
            })
        })

        try {
            const streamQualityList = await Promise.all(promises);
            return streamQualityList;
        } catch (e) {
            console.warn(e);
        }

        return null;
    }
}

module.exports = StreamQualityReport;