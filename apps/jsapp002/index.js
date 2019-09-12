import * as _ from 'lodash'

module.exports = (something) => {
    console.log(_.get(something, 'message', 'no_message'))
}
