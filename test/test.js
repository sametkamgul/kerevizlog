var test = require('../server');

test.info("info-1", "info-2");
test.error("error-1", "error-2");
test.warn("warn-1", "wan-2");

var testRemote = require('kerevizlog');

testRemote.info('info-remote-1', 'info-remote-2');