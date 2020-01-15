import { Feature } from "../Objects"

// 得到某字符串的所有顺序序列
function getOrderArray(str: string): string[] {
    let result: string[] = []

    for (let i of str) {
        let res = result.concat()
        result.push(i)
        for (let j of res) {
            result.push(j + i)
        }
    }

    return result
}

// 得到两字符串数组中相同的项
function getSameItem<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(val => {
        return arr2.indexOf(val) !== -1
    })
}

// 得到一个字符对应在一个字符串内所有的索引
function getAllCharsIndex(str1: string, str2: string): number[] {
    let pos = str2.indexOf(str1)
    let position: number[] = []

    while (pos !== -1) {
        position.push(pos)
        pos = str2.indexOf(str1, pos + 1)
    }

    return position
}

// 移除数组内所有的重复项
function removeDuplicates(arr: string[]): string[] {
    let result: string[] = []

    for (let i of arr) {
        if (result.indexOf(i) === -1) {
            result.push(i)
        }
    }

    return result
}


export {
    getOrderArray,
    getSameItem,
    getAllCharsIndex,
    removeDuplicates
}
