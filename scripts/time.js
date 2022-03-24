/**
 * returns formatted date-time
 * @return {string}
 */
exports.currentDate = function (timeformat) {
    var strfTime = require('strftime');
    
    return strfTime(timeformat);
}

exports.currentTime = function (timeformat) {
    var strfTime = require('strftime');
    
    return `[${strfTime(timeformat)}]`;
}