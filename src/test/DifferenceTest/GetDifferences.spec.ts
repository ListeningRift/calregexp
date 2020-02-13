import { getAllAnchors } from '../../difference'

describe('test get all the chars to index', () => {
    test('test get all the chars to index 1', () => {
        expect(getAllAnchors('ada', 'abcdaa')).toStrictEqual([
            {
                'char': 'a',
                'indexs': [0]
            },
            {
                'char': 'd',
                'indexs': [3]
            },
            {
                'char': 'a',
                'indexs': [4, 5]
            }
        ])
    })

    test('test get all the chars to index 2', () => {
        expect(getAllAnchors('ushik', 'ushiuhskk')).toStrictEqual([
            {
                'char': 'u',
                'indexs': [0]
            },
            {
                'char': 's',
                'indexs': [1]
            },
            {
                'char': 'h',
                'indexs': [2]
            },
            {
                'char': 'i',
                'indexs': [3]
            },
            {
                'char': 'k',
                'indexs': [7, 8]
            }
        ])
    })

    test('test get all the chars to index 3', () => {
        expect(getAllAnchors('dna', 'dfvbna')).toStrictEqual([
            {
                'char': 'd',
                'indexs': [0]
            },
            {
                'char': 'n',
                'indexs': [4]
            },
            {
                'char': 'a',
                'indexs': [5]
            },
        ])
    })
})
