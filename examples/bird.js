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
  pointLight(200, 200, 200, locX, locY, 0);

  //beginShape();
  for (let i=0; i<count; i++){
    push();
    translate(a[i].x, a[i].y, a[i].z);
    //ambientMaterial(250);
    normalMaterial();
    sphere(20);
    pop();
  }
  //endShape(CLOSE);
}


