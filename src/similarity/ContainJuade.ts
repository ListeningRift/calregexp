function containJudge(strShort: string, strLong: string): boolean {
  if (strLong.length <= strShort.length) {
    return false
  }

  const reStr = new RegExp(strShort.split("").join(".*"))
  if (strLong.match(reStr)) {
    return true
  } else {
    return false
  }
}

export { containJudge }
