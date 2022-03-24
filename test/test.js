var KerevizLoggerLocal = require('../server');

var kLogger = new KerevizLoggerLocal({
    rootFolder : 'Logs',
    consoleLogAllowed: true,
});

kLogger.info("info-1", "info-2");
kLogger.error("error-1", "error-2");
kLogger.warn("warn-1", "wan-2", 1);

// var testLoggerRemote = require('kerevizlog');

// testLoggerRemote.info('info-log-1', 'info-log-2');