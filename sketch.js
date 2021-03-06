let cnv;
let Pig1;
let Pig2;
let Button;

function setup() {
  cnv = createCanvas(window.innerWidth * (2/3), window.innerHeight)
  Pig1 = new pig(-50,0,"Dot")
  Pig2 = new pig(50,0,"Dot")

  Button = createButton("Roll");
  Button.position(width*(0.9),height/2)
  Button.mousePressed(function (){
    Pig1.roll();
    Pig2.roll();
  })
}

function draw() {
  background(50);
  translate(width/2,height/2)
  Pig1.show();
  Pig2.show();
}
