import { featureRegExp } from './utils'

function containJudge(strShort: string, strLong: string): boolean {
    if (strLong.length < strShort.length) {
        return false
    }

    const reStr = featureRegExp(strShort)
    if (strLong.match(reStr)) {
        return true
    } else {
        return false
    }
}

export { containJudge }
