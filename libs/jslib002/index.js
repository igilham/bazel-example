const _ = require('lodash')

module.exports = (something) => _.get(something, 'message', 'no_message')
