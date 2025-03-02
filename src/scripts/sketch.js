const MARGIN = 64;

let initBoxSize = 10;
let boxSize = initBoxSize;

let speed = 2;

let initPos;

let slider1;
let slider2;
let slider3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "10");
  canvas.style("pointer-events", "none");

  slider1 = select("#slider1");
  slider2 = select("#slider2");
  slider3 = select("#slider3");

  initPos = createVector(width / 2, height / 2);
}

function textContent() {
  const x = round(initPos.x + boxSize / 2);
  const y = round(initPos.y + boxSize / 2);

  fill("black");
  strokeWeight(0.2);
  textSize(8);
  textFont("Arial Narrow");
  stroke(10),
    //horizontal line
    line(0, y, width, y);

  //vertical line
  line(x, 0, x, height);

  arc(x, y, 10, 10, frameCount / 20, PI + frameCount / 10);
  ellipse(x, y, 2);
  text(`${x} ; ${y}`, x + 10, y);

  text(x, x, 20);
  text(y, 20, initPos.y);
  text(x, x, height - 20);
  text(y, width - 20, initPos.y);
}

let t = 0;
let history = [];
let trailSize = 400;
function crazySquare() {
  let noMouse = true;

  let interpolation = 0.04;

  const textCoords = createVector(
    (mouseX + initPos.x) / 2,
    (mouseY + initPos.y) / 2,
    // Calculate angle between mouse and initial position
    atan2(mouseY - initPos.y, mouseX - initPos.x),
  );

  push();
  textSize(10);
  strokeWeight(0.5);
  textAlign(CENTER, CENTER);
  if (
    MARGIN < mouseX &&
    mouseX < width - MARGIN &&
    mouseY < height - MARGIN &&
    MARGIN < mouseY
  ) {
    noMouse = false;
    ellipse(mouseX, mouseY, 10);
    line(mouseX, mouseY, initPos.x, initPos.y);
    translate(textCoords.x, textCoords.y);
    rotate(textCoords.z);
    text("dist: ~ " + round(dist(mouseX, mouseY, initPos.x, initPos.y)), 0, -5);
  }
  pop();

  boxSize += speed / 9;

  if (boxSize < initBoxSize || boxSize > initBoxSize * 2) {
    speed *= -1;
  }

  const freeWill = 300;

  let looseMargin = MARGIN - map(sin(t), -1, 1, 0, boxSize);

  initPos.y = lerp(
    initPos.y,
    (noMouse ? height / 2 : mouseY) +
      ((noMouse ? height : freeWill) * sin(noise(t + 2000)) -
        (noMouse ? height : freeWill) / 2),
    interpolation,
  );

  initPos.y = constrain(initPos.y, looseMargin, height - looseMargin);

  initPos.x = lerp(
    initPos.x,
    (noMouse ? width / 2 : mouseX) +
      ((noMouse ? width : freeWill) * sin(noise(t / 2)) -
        (noMouse ? width : freeWill) / 2),
    interpolation,
  );
  initPos.x = constrain(initPos.x, looseMargin, width - looseMargin);

  rectMode(CORNER);

  t += 0.03;

  history.push(createVector(initPos.x, initPos.y, boxSize));
  if (history.length > trailSize) {
    history.splice(0, 1);
  }

  for (var i = 1; i < history.length; i++) {
    const x = history[i].x;
    const y = history[i].y;
    const size = history[i].z;

    const min = 20;
    const max = 230;

    let op = map(i, 0, trailSize, 0, 80);

    const color1 = ((max - min) / 2) * cos(i / 20) + (max + min) / 2;
    const color2 = ((max - min) / 2) * cos(i / 50) + (max + min) / 2;
    const color3 = ((max - min) / 2) * cos(i / 30) + (max + min) / 2;

    rectMode(CENTER);
    stroke(color1, color2, color3, op + 20);
    fill(color3, color1, color2, op - 20);
    rect(x, y, size);
  }
}

function draw() {
  clear();
  crazySquare();
  //textContent()
}

function keyPressed() {
  if (key === "s") {
    const name = prompt("what are you called?");

    if (name === null) {
      return;
    }

    textAlign(CENTER, CENTER);
    text("by pedro machado and " + name, width - MARGIN, height - MARGIN);
    saveCanvas("your_sketch", "jpg");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
