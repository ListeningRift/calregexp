import { getAllCharsIndex } from './utils'

// stringToindex接口记录字符串内某字符对应的在字符串中
// 的所有索引之后差异概括时使用
interface stringToindex {
    char: string,
    indexs: number[]
}

// 得到特征字符串中每个字符对应在对象字符串中的位置，即结果会
// 返回一个stringToindex型数据数组，每个stringToindex
// 中储存字符与符合位置顺序要求的所有索引。
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
