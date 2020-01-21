
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
    removeDuplicates
}
