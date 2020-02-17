import { getAllAnchors, getDifferences } from '../../difference'
import { DifferenceFeature, anchor } from '../../Objects'

describe.each([
    ['ada',
    'abcdaa', [
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
    ], [
        new DifferenceFeature(''),
        new DifferenceFeature('bc'),
        new DifferenceFeature(['', 'a']),
        new DifferenceFeature(['a', ''])
    ]],
    ['ushik',
    'ushiuhskk', [
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
    ],[
        new DifferenceFeature(''),
        new DifferenceFeature(''),
        new DifferenceFeature(''),
        new DifferenceFeature(''),
        new DifferenceFeature(['uhs', 'uhsk']),
        new DifferenceFeature(['k', ''])
    ]],
    ['dna',
    'sdfvbna', [
        {
            'char': 'd',
            'indexs': [1]
        },
        {
            'char': 'n',
            'indexs': [5]
        },
        {
            'char': 'a',
            'indexs': [6]
        },
    ], [
        new DifferenceFeature('s'),
        new DifferenceFeature('fvb'),
        new DifferenceFeature(''),
        new DifferenceFeature('')
    ]]
])('test get all the differences by similar feature', (feature, str, anchors, differences) => {
    test('test get all the anchors ', () => {
        expect(getAllAnchors(feature as string, str as string)).toStrictEqual(anchors)
    })

    test('test get all the differences by anchors', () => {
        expect(getDifferences(str as string, anchors as anchor[])).toStrictEqual(differences)
    })
})
