const getReadableDate = timestamp => {
  const intDate = timestamp.getDate()
  const date = intDate.toString().length > 1 ? intDate : `0${intDate}`
  const intMonth = timestamp.getMonth() + 1
  const month = intMonth.toString().length > 1 ? intMonth : `0${intMonth}`
  const year = timestamp.getFullYear()
  return `${date}-${month}-${year}`
}

module.exports = getReadableDate
