let outcome;
let scaler = 0.2;
class pig{
  constructor(x,y,state){
    this.pos = createVector(x,y);
    this.state = state;
    this.vel = createVector(0,0);
    this.diameter = width*(4/25)
    this.radius = this.diameter/2
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
    this.vel.set([random(-scaler*this.diameter,scaler*this.diameter),random(-scaler*this.diameter,scaler*this.diameter)]);

  }
  show = function(){
    this.pos.add(this.vel)
    circle(this.pos.x,this.pos.y,this.diameter)
    this.vel.mult(0.98)
    textSize(width/50);
    text(this.state, this.pos.x, this.pos.y)
    textAlign(CENTER, CENTER);

    if (this.pos.x < -width/2 + this.radius){
      this.pos.x = -width/2 + this.radius;
      this.vel.x = Math.abs(this.vel.x);
    }else if (this.pos.x > width/2 - this.radius){
      this.pos.x = width/2 - this.radius;
      this.vel.x = -Math.abs(this.vel.x) ;
    }

    if (this.pos.y < -height/2 + this.radius){
      this.pos.y = -height/2 + this.radius;
      this.vel.y = Math.abs(this.vel.y);
    }else if (this.pos.y >= height/2 - this.radius){
      this.pos.y = height/2 - this.radius;
      this.vel.y = -Math.abs(this.vel.y);
    }
  }
}
