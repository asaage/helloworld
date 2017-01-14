console.log("bird");
const dots = 12;
let a = [];
function setup() {
  createCanvas(720, 400);
  for (let i=0; i<dots; i++){
    a[i]=random(width);
  }
}

function draw() {
  background(55);
  stroke(2);
  beginShape();
  for (let i=0; i<dots; i++){
    vertex(a[i], random(heigth));
  }
  endShape(CLOSE);
}
