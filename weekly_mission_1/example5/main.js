const logger = require('./logger')

logger.log('This is an informationa message')

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This is an informational mesage')