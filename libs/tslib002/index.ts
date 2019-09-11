import * as _ from 'lodash'

export default (something) => _.get(something, 'message', 'no_message')
