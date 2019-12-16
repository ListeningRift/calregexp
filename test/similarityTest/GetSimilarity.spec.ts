import { deleteDifferentChars, getAllCharsToIndex, getAllCharsIndex } from '../../src/similarity'

test('test delete different chars "have the same part" 1', () => {
    expect(deleteDifferentChars('adjsdhsjns', 'saksdsadjlk')).toStrictEqual(['adjsdsjs', 'sasdsadj'])
})

test('test delete different chars "have the same part" 2', () => {
    expect(deleteDifferentChars('abcdef', 'efghijk')).toStrictEqual(['ef', 'ef'])
})

test('test delete different chars "don\'t have the same part"', () => {
    expect(deleteDifferentChars('adsxwd', 'jkjinl')).toStrictEqual(['', ''])
})

test('test all the chars index 1', () => {
    expect(getAllCharsIndex('s', 'sksksjsj')).toStrictEqual([0, 2, 4, 6])
})

test('test all the chars index 2', () => {
    expect(getAllCharsIndex('a', 'abacsae')).toStrictEqual([0, 2, 5])
})

test('test get all the chars to index 1', () => {
    expect(getAllCharsToIndex('abcdaa', 'adef')).toStrictEqual([
        {
            'a': [0, 4, 5],
            'd': [3]
        },
        {
            'a': [0],
            'd': [1]
        }
    ])
})

test('test get all the chars to index 2', () => {
    expect(getAllCharsToIndex('vbmdvmsdv', 'ushiuhsk')).toStrictEqual([
        {
            's': [6]
        },
        {
            's': [1, 6]
        }
    ])
})

test('test get all the chars to index 3', () => {
    expect(getAllCharsToIndex('ihgfadf', 'dfvbna')).toStrictEqual([
        {
            'f': [3, 6],
            'a': [4],
            'd': [5]
        },
        {
            'f': [1],
            'd': [0],
            'a': [5]
        }
    ])
})
