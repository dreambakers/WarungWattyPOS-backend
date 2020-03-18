dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/WarungWatty';

module.exports = {
    dbConnectionUrl: process.env.NODE_ENV === 'test' ? dbUrl + 'Test' : dbUrl
}
