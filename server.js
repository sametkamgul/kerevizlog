module.exports = function KerevizLog(config) {
    var constants = require('./scripts/constants');

    this.config = {
        rootFolder: config.rootFolder
            ? config.rootFolder
            : constants.defaults.rootFolderDefault,
        consoleLogAllowed: config.consoleLogAllowed
            ? config.consoleLogAllowed
            : true,
        logTimeFormat: config.logTimeFormat
            ? config.logTimeFormat
            : constants.defaults.logTimeFormat,
        fileTimeFormat: config.fileTimeFormat
            ? config.fileTimeFormat
            : constants.defaults.filetimeFormat,
        fileExtension: config.fileExtension
            ? config.fileExtension
            : constants.defaults.fileExtension,
        namePrefix: config.namePrefix
            ? config.namePrefix
            : constants.defaults.namePrefix,
        rootFolder: config.rootFolder
            ? config.rootFolder
            : constants.defaults.rootFolder,
    };

    this.info = function (...args) {
        writeToFile(constants.prefix.info, args, this.config);
    };
    this.error = function (...args) {
        writeToFile(constants.prefix.error, args, this.config);
    };
    this.warn = function (...args) {
        writeToFile(constants.prefix.warning, args, this.config);
    };
};

function writeToFile(logType, args, config) {
    var fs = require('fs');
    var path = require('path');
    var constants = require('./scripts/constants');
    var time = require('./scripts/time');

    // configs
    var logTimeFormat = config.logTimeFormat;
    var fileTimeFormat = config.fileTimeFormat;
    var rootFolder = config.rootFolder;
    var fileExtension = config.fileExtension;
    var namePrefix = config.namePrefix;

    var line = '';
    var logFinal = '';
    var fileName =
        namePrefix +
        constants.path.seperator.dash +
        time.currentDate(fileTimeFormat) +
        fileExtension;

    try {
        if (!fs.existsSync(rootFolder)) {
            fs.mkdirSync(rootFolder);
        }

        args.forEach((log, ind) => {
            line += log + constants.specialChars.space;
        });

        logFinal +=
            logType +
            time.currentTime(logTimeFormat) +
            line +
            constants.specialChars.space;

        fs.appendFileSync(path.join(rootFolder, fileName), logFinal);
        if (config.consoleLogAllowed) {
            console.log(logFinal);
        }
    } catch (err) {
        console.error(err);
    }
}
