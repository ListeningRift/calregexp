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

// 得到str1在str2内所有位置，得到所有索引
function getAllCharsIndex(str1: string, str2: string): number[] {
    let pos = str2.indexOf(str1)
    let position: number[] = []

    while (pos !== -1) {
        position.push(pos)
        pos = str2.indexOf(str1, pos + 1)
    }

    return position
}

interface stringToindex {
    [key: string]: number[]
}

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



export { deleteDifferentChars, getAllCharsIndex, getAllCharsToIndex }
