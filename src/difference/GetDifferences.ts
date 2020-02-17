import { getAllCharsIndex } from './utils'
import { DifferenceFeature, anchor } from '../Objects'

// 得到特征字符串中每个字符对应在对象字符串中的位置，即结果会
// 返回一个stringToindex型数据数组，每个stringToindex
// 中储存字符与符合位置顺序要求的所有索引。
export function getAllAnchors(feature: string, str: string): anchor[] {
    let res: anchor[] = []

    for (let i = 0; i < feature.length; i++) {
        let strtoindex: anchor = {
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

// 输入目标字符串与对应的特征锚点，得到锚点间的差异，以DifferenceFeature
// 的数组形式存储，通过索引进行位置对应，每个DifferenceFeature可以储存
// 对应位置所有差异字符串
export function getDifferences(str: string, anchors: anchor[]): DifferenceFeature[] {
    let res: DifferenceFeature[] = []

    const firstIndex = anchors[0].indexs
    if (firstIndex.length === 1) {
        res.push(new DifferenceFeature(str.slice(0, firstIndex[0])))
    } else {
        let differences: string[] = []
        firstIndex.forEach(i => {
            differences.push(str.slice(0, i))
        })
        res.push(new DifferenceFeature(differences))
    }

    for (let i = 0; i < anchors.length; i++) {
        const preIndex = anchors[i].indexs
        const lastIndex = anchors[i + 1]?.indexs || [str.length]

        if (preIndex.length * lastIndex.length === 1) {
            res.push(new DifferenceFeature(str.slice(preIndex[0] + 1, lastIndex[0])))
            continue
        } else {
            let differences: string[] = []
            preIndex.forEach(prei => {
                lastIndex.forEach(lasti => {
                    differences.push(str.slice(prei + 1, lasti))
                })
            })
            res.push(new DifferenceFeature(differences))
        }
    }

    return res
}
