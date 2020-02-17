import { getOrderArray } from '../../similarity/utils'

describe('test utils: get all combinations of characters', () => {
    test('get all combinations of characters 1', () => {
        expect(getOrderArray('asd')).toStrictEqual(['a', 's', 'as', 'd', 'ad', 'sd', 'asd'])
    })

    test('get all combinations of characters 2', () => {
        expect(getOrderArray('edfr')).toStrictEqual(['e', 'd', 'ed', 'f', 'ef', 'df', 'edf', 'r', 'er', 'dr', 'edr', 'fr', 'efr', 'dfr', 'edfr'])
    })
})
