const getReadableDate = timestamp => {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]

  const intDate = timestamp.getDate()
  const date = intDate.toString().length > 1 ? intDate : `0${intDate}`
  const intMonth = timestamp.getMonth()
  const month = monthNames[intMonth]
  const year = timestamp.getFullYear()
  const intHour = timestamp.getHours()
  const hour = intHour.toString().length > 1 ? intHour : `0${intHour}`
  const intMinute = timestamp.getMinutes()
  const minute = intMinute.toString().length > 1 ? intMinute : `0${intMinute}`

  return `${hour}:${minute}, ${date} ${month} ${year}`
}

module.exports = getReadableDate
