import { containJudge } from '../../src/similarity'

test('test containJudge: Error in the length of arguments', () => {
    expect(containJudge('aaabc0', 'abc')).toBe(false)
})

test('test containJudge: Error in can\'t match', () => {
    expect(containJudge('scf', 'fgjkshk')).toBe(false)
})

test('test containJudge: can match normally 1', () => {
    expect(containJudge('abc', 'aaabc0')).toBe(true)
})

test('test containJudge: can match normally 2', () => {
    expect(containJudge('abc', 'aaadbeca')).toBe(true)
})
