var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;

  this.talk = function(){
    return 'I am the great ' + this.name;
  }

  this.eat = function(food){
    if(food.poisoned === false){
      if(this.health < (this.health + food.replenishmentValue*1.5) && food.name === this.favouriteFood){
        this.health = (this.health += food.replenishmentValue*1.5).toFixed(0);
      } else if(this.health < (this.health + food.replenishmentValue)){
        this.health = (this.health += food.replenishmentValue).toFixed(0);
      } else {
        this.health = 100;
      }
    } else {
      this.health = (this.health += food.replenishmentValue).toFixed(0);
    }
  }
}

module.exports = Hero;
