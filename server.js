module.exports = function KerevizLog(config) {
    var constants = require('./scripts/constants');

    config = config ? config : {};

    this.config = {
        rootFolder: config.hasOwnProperty('rootFolder')
            ? config.rootFolder
            : constants.defaults.rootFolderDefault,
        consoleLogAllowed: config.hasOwnProperty('consoleLogAllowed')
            ? config.consoleLogAllowed
            : true,
        logTimeFormat: config.hasOwnProperty('logTimeFormat')
            ? config.logTimeFormat
            : constants.defaults.logTimeFormat,
        fileTimeFormat: config.hasOwnProperty('fileTimeFormat')
            ? config.fileTimeFormat
            : constants.defaults.filetimeFormat,
        fileExtension: config.hasOwnProperty('fileExtension')
            ? config.fileExtension
            : constants.defaults.fileExtension,
        namePrefix: config.hasOwnProperty('namePrefix')
            ? config.namePrefix
            : constants.defaults.namePrefix,
    };

    this.info = function (...args) {
        console.log(config);
        return writeToFile(constants.prefix.info, args, this.config);
    };
    this.error = function (...args) {
        return writeToFile(constants.prefix.error, args, this.config);
    };
    this.warn = function (...args) {
        return writeToFile(constants.prefix.warning, args, this.config);
    };
};

function writeToFile(logType, args, config) {
    var fs = require('fs');
    var path = require('path');
    var constants = require('./scripts/constants');
    var time = require('./scripts/time');

    // configs
    var rootFolder = config.rootFolder;
    var consoleLogAllowed = config.consoleLogAllowed;
    var logTimeFormat = config.logTimeFormat;
    var fileTimeFormat = config.fileTimeFormat;
    var fileExtension = config.fileExtension;
    var namePrefix = config.namePrefix;

    var line = '';
    var logFinal = '';
    var fileTimeFormatString = time.currentDate(fileTimeFormat);

    var fileName =
        namePrefix +
        (namePrefix == '' ? '' : constants.path.seperator.dash) +
        fileTimeFormatString +
        fileExtension;

    try {
        if (!fs.existsSync(rootFolder)) {
            fs.mkdirSync(rootFolder);
        }

        args.forEach((log, ind) => {
            line += log;
        });

        logFinal += logType + time.currentTime(logTimeFormat) + line;

        if (consoleLogAllowed) {
            console.log(logFinal);
        }
        logFinal += constants.specialChars.newline;
        fs.appendFileSync(path.join(rootFolder, fileName), logFinal);
        return logFinal;
    } catch (err) {
        console.error(err);
    }
    return 0;
}
