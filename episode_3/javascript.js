const app = () => {
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]

  const formatDate = () => {
    const date = new Date()
    const day = days[date.getDay()]
    const dayOfMonth = date.getDate()
    const month = months[date.getMonth()].slice(0,3)
    const year = date.getYear() + 1900
    return `${day}, ${month} ${dayOfMonth}, ${year}`
  }

  const formatTime = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }

  const date = formatDate()

  const displayClock = () => {
    const time = formatTime()
    document.getElementById("clock").innerHTML = date
    document.getElementById("time").innerHTML = time
  }

  displayClock()

  setInterval(displayClock, 1000)
}

window.onload = app
