# kerevizlog
 Kerevizlog is a Node.js logger package. You can create custom console output and/or write to a text-based file.

# Documentation:
## importing package
```
var Kerevizlog = require('kerevizlog');
```

## default configuration
```
var config = {
    rootFolder: 'Logs',
    consoleLogAllowed: false,
    logTimeFormat: '%d.%m.%Y',
    fileTimeFormat: '%d.%m.%Y-%H:%M:%S',
    fileExtension: '.log',
    namePrefix: 'Log',
}
```

## init an object with or without config
```
var kLogger = new Kerevizlog();
```
or
```
var kLogger = new Kerevizlog(config);
```


## config parameters
- `rootFolder:` setting root folder relative path
- `consoleLogAllowed:` setting for enable/disable console output
- `logTimeFormat:` time format for logging
- `fileTimeFormat:` time format for filename
- `fileExtension:` file extension
- `namePrefix:` name prefix

# usage:
info log method
```
kLogger.info('this is my custom info log output');
kLogger.info('this', 'is', 'my', 'custom', 'info', 'log', 'output');
```
## error log method
```
kLogger.error('I am an error message');
```
## warning log method
```
kLogger.warn('it is a warning message');
```
