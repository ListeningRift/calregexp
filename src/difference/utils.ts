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

export { getAllCharsIndex }
