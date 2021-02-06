var hr
var min
var sec

function setup() {
  createCanvas(800,400)
  createSprite(260, 200, 10, 280);
  createSprite(540, 200, 10, 280);
  createSprite(400, 60, 280, 10);
  createSprite(400, 340, 280, 10);
}

function draw() {
  hr = hour()
  min = minute()
  sec = second()
  background(255,255,255);  
  angleMode(DEGREES)
  hrAngle = map(hr, 0, 12, 0, 360)
  minAngle = map(min, 0, 60, 0, 360)
  secAngle = map(sec, 0, 60, 0, 360)

  push()
  translate(400,200)
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  push()
  translate(400,200)
  rotate(minAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  push()
  translate(400,200)
  rotate(secAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  drawSprites();
}