import { getOrderArray } from './utils'
import { SimilarityFeature } from '../Objects'
import { default as _ } from 'lodash'

// 删去字符串间不同的字符，不同的字符不可能是相似特征
// 提前删去能够减少计算量
// 返回一个字符串元组，索引位置相对应
export function deleteDifferentChars(str1: string, str2: string): [string, string] {
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

// 通过比较得到参与比较的两个字符串的所有相似特征
export function featrueGenerated(strArray: string[]): SimilarityFeature[] {
    let features: string[][] = []
    for (let i of strArray) {
        features.push(getOrderArray(i))
    }

    let featureStrs = features[0]
    for (let i of features) {
        featureStrs = _.intersection(featureStrs, i)
    }
    featureStrs = _.uniq(featureStrs)
    let result: SimilarityFeature[] = []
    for (let i of featureStrs) {
        result.push(new SimilarityFeature(i))
    }

    return result
}
