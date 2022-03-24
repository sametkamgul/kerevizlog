module.exports = {
    prefix: {
        info: '[INFO]',
        error: '[ERROR]',
        warning: '[WARNING]',
    },
    defaults: {
        rootFolder: 'Logs',
        fileExtension: '.log',
        namePrefix: 'Log',
        consoleLogAlloed: true,
        logTimeFormat: '%d.%m.%Y-%H:%M:%S',
        filetimeFormat: '%d.%m.%Y',
    },
    path: {
        seperator: {
            dash: '-',
        },
    },
    specialChars: {
        space: ' ',
        newline: '\n',
    },
};
