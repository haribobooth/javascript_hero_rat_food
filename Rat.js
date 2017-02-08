var Rat = function(){
  this.touch = function(food){
    food.replenishmentValue = food.replenishmentValue * -1;
    food.poisoned = true;
  }
}

 module.exports = Rat;
