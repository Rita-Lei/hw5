function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
  strokeWeight(1);
  
  for(var a = 10; a <= 200; a += 20) {
  line(a,0,0,a);
    line(200,a,a,200);
    line(200,200-a,200+a,200);
    line(200+a,0,400,200-a);
    line(200,200+a,200-a,200);
    line(200-a,400,0,200+a);
    line(200,200+a,200+a,200);
    line(200+a,400,400,200+a);
  }
  
  for(var b = 0; b <= 400; b += 20) {
  }
  line(0,b,400,b);
  line(b,0,b,400);
}
