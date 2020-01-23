debugger
import { getAllCharsIndex } from './utils'

// stringToindex接口记录字符串内某字符对应的在字符串中
// 的所有索引之后差异概括时使用
// 使用时只记录参与比较的两个字符串中相同字符的数据
interface stringToindex {
    char: string,
    indexs: number[]
}

// 得到两个字符串相同字符对应的位置，即结果会返回一个
// stringToindex型数据元组，索引位置相对应
// 该函数得到字符在字符串中所有的索引
function getAllCharsToIndex(feature: string, str: string): stringToindex[] {
    let res: stringToindex[] = []

    for (let i = 0; i < feature.length; i++) {
        let strtoindex: stringToindex = {
            char: feature[i],
            indexs: getAllCharsIndex(feature[i], str).filter((value) => {
                const patternFront = new RegExp(feature.slice(0, i).split('').join('.*?'), 'g')
                const patternBehind = new RegExp(feature.slice(i + 1).split('').join('.*?'), 'g')
                if (str.slice(0, value).match(patternFront) && str.slice(value + 1).match(patternBehind)) {
                    return true
                }
                return false
            })
        }
        res.push(strtoindex)
    }

    return res
}


export { getAllCharsToIndex }
