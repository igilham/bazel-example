import { get } from 'lodash'

const something = {
  message: 'Hello world'
}

console.log(get(something, 'message', 'no message'))
