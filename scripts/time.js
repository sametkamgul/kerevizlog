/**
 * returns formatted date-time
 * @return {string}
 */
exports.currentDate = function () {
    var strfTime = require('strftime');
    
    return strfTime('%d.%m.%Y');
}

exports.currentTime = function () {
    var strfTime = require('strftime');
    
    return `[${strfTime('%d.%m.%Y-%H:%M:%S')}]`;
}