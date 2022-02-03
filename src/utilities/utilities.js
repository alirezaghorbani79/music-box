const secToMin = (time) => {
  const minute = Math.floor(time / 60)
  const second = Math.floor(time % 60)

  if (second < 10) return `${minute}:0${second}`

  return `${minute}:${second}`
}

const shuffle = (list) => {
  const shuffledList = [...list]
  shuffledList.sort(() => Math.random() - 0.5)
  return shuffledList
}

export { secToMin, shuffle }
