var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;

  this.talk = function(){
    return 'I am the great ' + this.name;
  }
}

module.exports = Hero;
