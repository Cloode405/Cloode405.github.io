let bubbles = []
function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
  bubble = {
    x: random(width),
    y: random(height),
    dx: 2,
    dy: 3,
    r: random(255),
    g: random(255),
    b: random(255)
  }
  bubbles.push(bubble)
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    
  
  fill(bubble.r, bubble.g, bubble.b)
  circle(bubble.x, bubble.y, 40)
  bubble.x = bubble.x + bubble.dx
  bubble.y = bubble.y + bubble.dy

  
  if (bubble.x > width || bubble.x < 0) {
    bubble.dx = -bubble.dx
  }
     
  
  if (bubble.y > height || bubble.y < 0){
    bubble.dy = -bubble.dy
  }
  }
}
  function changeColor() {
    r = random(255)
    g = random(255)
    b = random(25)
  }
  