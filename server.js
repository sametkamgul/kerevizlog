exports.info = function (...args) {
    var fs = require('fs');
    var path = require('path');
    var constants = require('./scripts/constants');
    var time = require('./scripts/time');

    // TODO: check user choice in args
    var rootFolder = constants.path.rootFolderDefault;
    var fileExtension = constants.path.fileExtension;
    var line = '';
    var logFinal = '';
    var fileName =
        constants.path.namePrefix +
        constants.path.seperator.dash +
        time.currentDate() +
        fileExtension;

    try {
        if (!fs.existsSync(rootFolder)) {
            fs.mkdirSync(rootFolder);
        }

        args.forEach((log) => {
            line += log + constants.specialChars.space;
        });

        logFinal += constants.log.prefix.info + time.currentTime() + line + constants.specialChars.space + constants.specialChars.newline;
        
        fs.appendFileSync(path.join(rootFolder, fileName), logFinal);
    } catch (err) {
        console.log(err);
    }
};

exports.error = function (...args) {};

exports.warn = function (...args) {};
