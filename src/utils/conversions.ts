// 21:00 -> ['21', '00'] -> [21, 00]

export function convertHourStringToMinutes(hourString: String){
  const [hours, minutes] = hourString.split(':').map(Number)
  const result = (hours * 60) + minutes;
  return result
}

export function convertMinutesToHourString(minutesAmount: number){
  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}