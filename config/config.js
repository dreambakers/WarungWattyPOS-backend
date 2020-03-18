dbUrl = 'mongodb://localhost:27017/WarungWatty';

module.exports = {
    dbConnectionUrl: process.env.NODE_ENV === 'test' ? dbUrl + 'Test': process.env.MONGODB_URI || dbUrl
}
