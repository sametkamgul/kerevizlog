const kerevizlog = require('../server');
const Constants = require('../scripts/constants');

// init object
const kLogger = new kerevizlog({
    rootFolder: 'Logs',
    consoleLogAllowed: false,
    logTimeFormat: '%d.%m.%Y',
    fileTimeFormat: '%d.%m.%Y-%H:%M:%S',
    fileExtension: '.log',
    namePrefix: 'Log',
});

describe('tests for info method', () => {
    describe('stringContaining', () => {
        const expected = Constants.prefix.info;
        const result = kLogger.info('this is my second info log');

        it('results should be matched', () => {
            expect(result).toEqual(expect.stringContaining(expected));
        });
    });

    describe('stringContaining', () => {
        const expected = 'my second info log';
        const result = kLogger.info('this is my second info log');

        it('results should be matched', () => {
            expect(result).toEqual(expect.stringContaining(expected));
        });
    });

    describe('not.stringContaining', () => {
        const expected = 'this is my info log';
        const result = kLogger.info('this is not my info log');

        it('results should not matched', () => {
            expect(result).toEqual(expect.not.stringContaining(expected));
        });
    });
});
