import { Feature } from '../Objects'

// 在进行特征比较提取之前，先进行包含关系判断，如果长字符串包括短字符串
// 可以直接以短字符串为特征，减少多余计算
function containJudge(strShort: string, strLong: string): boolean {
    if (strLong.length < strShort.length) {
        return false
    }

    const reStr = new Feature(strShort).regexpGet()
    if (strLong.match(reStr)) {
        return true
    } else {
        return false
    }
}

export { containJudge }
