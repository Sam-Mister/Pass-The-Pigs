let cnv;
let Pigs = [];
let Button;
let RunningTotal = 0;
let CurrentRound = 0;
let Button1;
let ScoreKeeper = new Scorer();
let MakingBacon = false;
let ratio = window.screen.availWidth /  window.screen.availHeight

function setup() {
  cnv = createCanvas(window.screen.availWidth-20, window.screen.availHeight-(50*ratio))
  Pigs.push(new pig(-width/10,0,"Dot"))
  Pigs.push(new pig(width/10,0,"Dot"))

  Button = createButton("Roll");
  Button.position(width*(2/5),height*(4/5))
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
  Button1 = createButton("Save");
  Button1.position(width*(3/5),height*(4/5))
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
  text("Total:" + RunningTotal, -width/10,-(height)*(1/5));
  text("Current Score:" + CurrentRound, width*(3/20) , -(height)*(1/5))
  textSize(width / 20);
  text("Pass The Pigs", 0, -height/3)

  MakingBacon = ScoreKeeper.AreOverlapping(Pigs)
  if (MakingBacon == true){
    RunningTotal = 0;
    CurrentRound = 0;
    text("MAKING BACON", 0,0)
  }
}
