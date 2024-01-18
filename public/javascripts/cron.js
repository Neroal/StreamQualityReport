const CronJob = require('cron').CronJob;

function StartJob(callback) {
    return new CronJob('*/10 * * * * *', () => callback(), null, true, 'Asia/Taipei');
}

const cron = {};
cron.StartJob = StartJob;

module.exports = cron