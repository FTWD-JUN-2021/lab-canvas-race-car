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
  // ctx.drawImage(racecar, (canvas.width / 2 ) - racecar.width / 6, 575, racecar.width / 3, racecar.height / 3)
  blueCar.draw();
}

class Car {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

let blueCar = new Car(racecar, (canvas.width / 2 ) - racecar.width / 6, 575, racecar.width / 3, racecar.height / 3);


window.onkeydown = function(e) {
  if (e.key === 'ArrowLeft') {
    blueCar.x -= 10;
  } 
  if (e.key === 'ArrowRight') {
    blueCar.x += 10;
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  blueCar.draw();
}

animate();