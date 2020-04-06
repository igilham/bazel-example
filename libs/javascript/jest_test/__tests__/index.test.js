const index = require('../index.js')

describe('example jest test', () => {
    test('can execute code', () => {
        expect(index()).toEqual('Hello world')
    })
})
