import {
    getOrderArray,
    getSameItem
} from '../../similarity/utils'

describe('test utils: get all combinations of characters', () => {
    test('get all combinations of characters 1', () => {
        expect(getOrderArray('asd')).toStrictEqual(['a', 's', 'as', 'd', 'ad', 'sd', 'asd'])
    })

    test('get all combinations of characters 2', () => {
        expect(getOrderArray('edfr')).toStrictEqual(['e', 'd', 'ed', 'f', 'ef', 'df', 'edf', 'r', 'er', 'dr', 'edr', 'fr', 'efr', 'dfr', 'edfr'])
    })
})

describe('test utils: get all the items in both arrays', () => {
    test('get all the same items in both arrays 1', () => {
        expect(getSameItem(['a', 'b', 'c'], ['c', 'd', 'q'])).toStrictEqual(['c'])
    })

    test('get all the same items in both arrays 2', () => {
        expect(getSameItem(['a', 'v', 'g', 'f'], ['v', 'q', 'a', 'b'])).toStrictEqual(['a', 'v'])
    })
})
