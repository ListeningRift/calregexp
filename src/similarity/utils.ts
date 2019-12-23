function getOrderArray(str: string): string[] {
    let result: string[] = []

    for (let i = 0; i < str.length; i++) {
        let res = result.concat()
        result.push(str[i])
        for (let j of res) {
            result.push(j + str[i])
        }
    }

    return result
}

function getSameItem(arr1: string[], arr2: string[]): string[] {
    return arr1.filter(val => {
        return arr2.indexOf(val) !== -1
    })
}

function featureRegExp(str: string) {
    return new RegExp(str.split('').join('.*'))
}

function getAllCharsIndex(str1: string, str2: string): number[] {
    let pos = str2.indexOf(str1)
    let position: number[] = []

    while (pos !== -1) {
        position.push(pos)
        pos = str2.indexOf(str1, pos + 1)
    }

    return position
}

function removeDuplicates(arr: string[]) {
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
    featureRegExp,
    getAllCharsIndex,
    removeDuplicates
}
