import { containJudge } from '../../similarity/ContainJuade'

describe('test containJudge', () => {
    test('test containJudge: Error in the length of arguments', () => {
        expect(containJudge('aaabc0', 'abc')).toBeTruthy()
    })

    test('test containJudge: Error in can\'t match', () => {
        expect(containJudge('sc', 'fgjkshk')).toBeFalsy()
    })

    test('test containJudge: can match normally 1', () => {
        expect(containJudge('abc', 'aaabc0')).toBeTruthy()
    })

    test('test containJudge: can match normally 2', () => {
        expect(containJudge('abc', 'aaadbeca')).toBeTruthy()
    })
})
