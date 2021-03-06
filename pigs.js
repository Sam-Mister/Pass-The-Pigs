let outcome;
class pig{
  constructor(x,y,state){
    this.pos = createVector(x,y);
    this.state = state;
  }
  roll = function(){
    outcome = Math.random();
    if (outcome >= 0 && outcome <= 0.349){
      this.state = "No Dot";
    } else if (outcome > 0.349 && outcome <= 0.651){
      this.state = "Dot";
    } else if (outcome > 0.651 && outcome <= 0.875){
      this.state = "Razorback"
    } else if (outcome > 0.875 && outcome <= 0.963){
      this.state = "Trotter"
    } else if (outcome > 0.963 && outcome <= 0.993){
      this.state = "Snouter"
    } else {
      this.state = "Leaning jowler"
    }

  }
  show = function(){
    circle(this.pos.x,this.pos.y,width*(4/25))
    textSize(width/50);
    text(this.state, this.pos.x, this.pos.y)
    textAlign(CENTER, CENTER);
  }
}
