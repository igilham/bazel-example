const _ = require('lodash')

const something = {
    message: 'Hello world'
}

console.log(_.get(something, 'message', 'no message'))
