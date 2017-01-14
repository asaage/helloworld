console.log("bird");
const count = 12;
let a = [];
let cam = createVector(mouseX, mouseY, 200);
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent('container');
  for (let i=0; i<count; i++){
    a.push(createVector(random(width),random(height),0));
  }
  //translate(-width/2,-height/2,0);
}

function draw() {
  background(228,0,43);
  camera(cam.x,cam.y,cam.z)
  stroke(2);
  //beginShape();
  for (let i=0; i<count-1; i++){
    line(a[i].x, a[i].y, a[i].z, a[i+1].x, a[i+1].y, a[i+1].z);
  }
  //endShape(CLOSE);
}


