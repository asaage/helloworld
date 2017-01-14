console.log("bird");
const count = 12;
let a = [];
let cam;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent('container');
  for (let i=0; i<count; i++){
    a.push(createVector(random(width),random(height),0));
  }
  cam = createVector(200, 200, 200);
  //translate(-width/2,-height/2,0);
}

function draw() {
  background(228,0,43);
  camera(0, 0, sin(frameCount * 0.01) * 100);
  stroke(2);
  //beginShape();
  for (let i=0; i<count-1; i++){
    line(a[i].x, a[i].y, a[i].z, a[i+1].x, a[i+1].y, a[i+1].z);
  }
  //endShape(CLOSE);
}


