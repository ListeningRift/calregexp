import { getAllCharsIndex } from './utils'

// stringToindex接口记录字符串内某字符对应的在字符串中
// 的所有索引之后差异概括时使用
// 使用时只记录参与比较的两个字符串中相同字符的数据
interface stringToindex {
    [key: string]: number[]
}

// 得到两个字符串相同字符对应的位置，即结果会返回一个
// stringToindex型数据元组，索引位置相对应
// 该函数得到字符在字符串中所有的索引
function getAllCharsToIndex(feature: string, str: string): stringToindex {

    let res: stringToindex = {}

    for (let i of feature) {
        if (!res[i]) {
            res[i] = getAllCharsIndex(i, str)
        }
    }

    return res
}

export { getAllCharsToIndex }
