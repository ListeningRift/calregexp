import { getAllCharsToIndex } from '../../difference'

describe('test get all the chars to index', () => {
    test('test get all the chars to index 1', () => {
        expect(getAllCharsToIndex('ada', 'abcdaa')).toStrictEqual(
            {
                'a': [0, 4, 5],
                'd': [3]
            }
        )
    })

    test('test get all the chars to index 2', () => {
        expect(getAllCharsToIndex('ushik', 'ushiuhskk')).toStrictEqual(
            {
                'u': [0, 4],
                's': [1, 6],
                'h': [2, 5],
                'i': [3],
                'k': [7, 8]
            }
        )
    })

    test('test get all the chars to index 3', () => {
        expect(getAllCharsToIndex('dna', 'dfvbna')).toStrictEqual(
            {
                'd': [0],
                'n': [4],
                'a': [5]
            }
        )
    })
})
