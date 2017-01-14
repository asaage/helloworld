console.log("bird");
const count = 12;
let a = [];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent('container');
  for (let i=0; i<count; i++){
    a.push(createVector(random(width),random(height),0));
  }
  translate(-width/2,-height/2,0);
}

function draw() {
  background(228,0,43);
  stroke(2);
  beginShape();
  for (let i=0; i<count; i++){
    vertex(a[i].x, a[i].y, a[i].z);
  }
  endShape(CLOSE);
}


