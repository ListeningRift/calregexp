import { deleteDifferentChars, featrueGenerated } from '../../similarity/GetSimilarity'
import { SimilarityFeature } from '../../Objects'

describe('test delete different chars', () => {
    test('test delete different chars: have the same part 1', () => {
        expect(deleteDifferentChars('adjsdhsjns', 'saksdsadjlk')).toStrictEqual(['adjsdsjs', 'sasdsadj'])
    })

    test('test delete different chars: have the same part 2', () => {
        expect(deleteDifferentChars('abcdef', 'efghijk')).toStrictEqual(['ef', 'ef'])
    })

    test('test delete different chars: don\'t have the same part', () => {
        expect(deleteDifferentChars('adsxwd', 'jkjinl')).toStrictEqual(['', ''])
    })
})

describe('test featrue generated', () => {
    test('test feature generated 1', () => {
        let resStr = ['a', 's', 'as', 'd', 'ad', 'sd', 'asd', 'f']
        let res: SimilarityFeature[] = []
        for (let i of resStr) {
            res.push(new SimilarityFeature(i))
        }
        expect(featrueGenerated(['asdf', 'fasd'])).toStrictEqual(res)
    })

    test('test feature generated 2', () => {
        let resStr = ['h', 'g', 'v', 'hv', 'gv', 'vv']
        let res: SimilarityFeature[] = []
        for (let i of resStr) {
            res.push(new SimilarityFeature(i))
        }
        expect(featrueGenerated(['hgvv', 'vghv'])).toStrictEqual(res)
    })
})
