let cnv;
let Pigs = [];
let Button;
let RunningTotal = 0;
let CurrentRound = 0;
let Button1;
let ScoreKeeper = new Scorer();
let MakingBacon = false;

function setup() {
  cnv = createCanvas(1000, 950)
  Pigs.push(new pig(-width/10,0,"Dot"))
  Pigs.push(new pig(width/10,0,"Dot"))

  Button = createButton("Roll");
  Button.position(width*(37/100),width*(33/50))
  Button.mousePressed(function (){
    for(var i = 0; i < Pigs.length; i++){
      Pigs[i].roll();
    }
    ScoreOfCurrentConfig = ScoreKeeper.getScore(Pigs)
    if (ScoreOfCurrentConfig == "Pig Out"){
      CurrentRound = 0;
    }else {
      CurrentRound += ScoreOfCurrentConfig;
    }
  })
  Button1 = createButton("Save Score");
  Button1.position(width*(27/50),width*(33/50))
  Button1.mousePressed(function(){
    RunningTotal += CurrentRound;
    CurrentRound = 0;
  }
);
}

function draw() {
  background(250);
  translate(width/2,height/2)
  for(var i = 0; i < Pigs.length; i++){
    Pigs[i].show();
  }
  textSize(width / 30);
  textAlign(CENTER, CENTER);
  text("Total:" + RunningTotal, -width/10,-(width)*(4/25));
  text("Current Score:" + CurrentRound, width*(7/50) , -(width)*(4/25))
  textSize(width / 20);
  text("Pass The Pigs", 0, -height/4)

  MakingBacon = ScoreKeeper.AreOverlapping(Pigs)
  if (MakingBacon == true){
    RunningTotal = 0;
    CurrentRound = 0;
    text("MAKING BACON", 0,0)
  }
}
