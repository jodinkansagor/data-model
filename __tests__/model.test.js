const fs = require('fs').promises;

const { Model } = require('../lib/model');

jest.mock('fs', () => ({
    promises: {
        
    }
}))

describe('model functions', () => {
    it('can create a new object according to the schema', () => {
        return create()
    })
})