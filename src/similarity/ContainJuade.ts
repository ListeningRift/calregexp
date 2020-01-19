import { SimilarityFeature } from '../Objects'

// 在进行特征比较提取之前，先进行包含关系判断，如果长字符串包括短字符串
// 可以直接以短字符串为特征，减少多余计算
function containJudge(str1: string, str2: string): boolean {
    const [strLong, strShort] = str1.length > str2.length ? [str1, str2] : [str2, str1]
    if (strLong.length < strShort.length) {
        return false
    }

    const reStr = new SimilarityFeature(strShort).regexpGet()
    if (strLong.match(reStr)) {
        return true
    } else {
        return false
    }
}

export { containJudge }
