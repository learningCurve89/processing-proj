function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  if(mouseIsPressed){
    fill(mouseX, mouseY, 60, 60);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80,80);
}
