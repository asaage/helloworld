console.log("bird");
const count = 12;
let a = [];
//let cam;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent('container');
  for (let i=0; i<count; i++){
    a.push(createVector(random(width),random(height),0));
  }
  
  //cam = createVector(200, 200, 200);
}

function draw() {
  background(228,0,43);
  orbitControl();
  ambientLight(100, 80, 80);
  ambientMaterial(250);
  //beginShape();
  for (let i=0; i<count; i++){
    push();
    translate(a[i].x, a[i].y, a[i].z);
    sphere(20);
    pop();
  }
  //endShape(CLOSE);
}


