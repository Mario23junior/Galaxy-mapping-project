const PROXY_CONFIG = [
    {
        context:['/project'],
        target:'http://localhost:8080/',
        secure: false,
        logLavel:'debug'
    }
];

module.exports = PROXY_CONFIG