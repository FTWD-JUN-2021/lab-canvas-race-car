const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

// canvas.width = 500;
// canvas.height = 700;

let background = new Image()
background.src = './images/road.png'

background.onload = function() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

let racecar = new Image ()
racecar.src = './images/car.png'
racecar.onload = function() {
  ctx.drawImage(racecar, (canvas.width / 2 ) - racecar.width / 6, 575, racecar.width / 3, racecar.height / 3)
}