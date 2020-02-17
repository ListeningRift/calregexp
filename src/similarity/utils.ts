import { default as _ } from 'lodash'

// 得到某字符串的所有顺序序列
export function getOrderArray(str: string): string[] {
    let result: string[] = []

    for (let i of str) {
        let res = _.clone(result)
        result.push(i)
        for (let j of res) {
            result.push(j + i)
        }
    }

    return result
}
