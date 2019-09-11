const getUploadDirName = () => {
  const date = new Date()
  let month = Number.parseInt(date.getMonth()) + 1
  month = month.toString().length > 1 ? month : `0${month}`
  let day = date.getDate()
  day = day.toString().length > 1 ? day : `0${day}`
  const dir = `${date.getFullYear()}${month}${day}`
  return dir
}

module.exports = getUploadDirName
