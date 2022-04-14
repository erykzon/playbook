const Logger = require('./logger')

const dbLogger = new Logger ('DB')

dbLogger.info('this is an informational message')

const accessLoger = new Logger('ACCESS')
accessLoger.verbose('This is a verbose message')