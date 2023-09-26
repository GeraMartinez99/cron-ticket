var cron = require('node-cron');
const { syncDB } = require('./task/sync-db');


cron.schedule('*/5 * * * * *', syncDB);