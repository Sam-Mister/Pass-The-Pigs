let Score;
let Values = {"No Dot":0, "Dot" : 0, "Razorback" : 5, "Trotter": 5, "Snouter" : 10, "Leaning jowler" : 15};
class Scorer {
  constructor(){
  }
  getScore = function(pigs){
    if(pigs[0].state == "No Dot" && pigs[1].state == "Dot" || pigs[1].state == "No Dot" && pigs[0].state == "Dot"){
      Score = "Pig Out"
    } else if (pigs[0].state == pigs[1].state){
      if (pigs[0].state == "No Dot" || pigs[0].state == "Dot"){
        Score = 1
      } else {
        Score = 2*(Values[pigs[0].state] + Values[pigs[1].state])
      }
    } else {
      Score = Values[pigs[0].state] + Values[pigs[1].state]
    }
    return Score;
  }
}
