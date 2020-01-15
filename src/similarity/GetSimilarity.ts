import {
    getOrderArray,
    getSameItem,
    getAllCharsIndex,
    removeDuplicates
} from './utils'
import { Feature } from '../Objects'

// stringToindex接口记录字符串内某字符对应的在字符串中
// 的所有索引之后差异概括时使用
// 使用时只记录参与比较的两个字符串中相同字符的数据
interface stringToindex {
    [key: string]: number[]
}


// 删去字符串间不同的字符，不同的字符不可能是相似特征
// 提前删去能够减少计算量
// 返回一个字符串元组，索引位置相对应
function deleteDifferentChars(str1: string, str2: string): [string, string] {
    let resStr1: string = ''
    let resStr2: string = ''
    for (let i of str1) {
        if (str2.indexOf(i) >= 0) {
            resStr1 += i
        }
    }

    for (let i of str2) {
        if (str1.indexOf(i) >= 0) {
            resStr2 += i
        }
    }

    return [resStr1, resStr2]
}

// 得到两个字符串相同字符对应的位置，即结果会返回一个
// stringToindex型数据元组，索引位置相对应
// 该函数得到字符在字符串中所有的索引
function getAllCharsToIndex(str1: string, str2: string): [stringToindex, stringToindex] {
    let [strList1, strList2] = deleteDifferentChars(str1, str2)

    let result1: stringToindex = {}
    let result2: stringToindex = {}

    for (let i of strList1) {
        if (!result1[i]) {
            result1[i] = getAllCharsIndex(i, str1)
        }
    }

    for (let i of strList2) {
        if (!result2[i]) {
            result2[i] = getAllCharsIndex(i, str2)
        }
    }

    return [result1, result2]
}

// 通过比较得到参与比较的两个字符串的所有相似特征
function featrueGenerated(strArray: string[]): Feature[] {
    let features: string[][] = []
    for (let i of strArray) {
        features.push(getOrderArray(i))
    }

    let featureStrs = features[0]
    for (let i of features) {
        featureStrs = getSameItem(featureStrs, i)
    }
    featureStrs = removeDuplicates(featureStrs)
    let result: Feature[] = []
    for (let i of featureStrs) {
        result.push(new Feature(i))
    }

    return result
}

export { deleteDifferentChars, getAllCharsToIndex, featrueGenerated }
