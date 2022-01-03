function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
  
function draw() {
    background(220);
    fill(255,0,0)
    circle(25,25,30)
    circle(375,25,30)
    circle(375,375,30)
    circle(25,375,30)
  }