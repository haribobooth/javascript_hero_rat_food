var assert = require('assert');
var Hero = require('../Hero');
var Food = require('../Food');
var Rat = require('../Rat');

describe('Hero', function(){

  describe('name', function(){
    var hero = new Hero('Sir Steve of Classicness', 'Cigarettes');
    it('should exist', function(){
      assert.equal('Sir Steve of Classicness', hero.name);
    });
  });

  describe('Health', function(){
    var hero = new Hero('Sir Matthew of Tests', 'Flapjacks');
    it('should start at 100', function(){
      assert.equal(100, hero.health);
    });
  });

  describe('Favourite food', function(){
    var hero = new Hero('Sir Peter of Soup', 'Soup');
    it('should exist', function(){
      assert.equal('Soup', hero.favouriteFood);
    });
  });

  describe('Talk', function(){
    var hero = new Hero('Sir Zsolt of the Barbarians', 'The skulls of his deceased enemies');
    it('should say name', function(){
      assert.equal('I am the great Sir Zsolt of the Barbarians', hero.talk());
    });
  });

  describe('Eat', function(){
    var hero = new Hero('Sir Sean of Literature', 'Cigarettes');
    var food1 = new Food('Burrito', 50);
    var food2 = new Food('Cigarettes', 5);

    it('should replenish health', function(){
      hero.health = 0;
      hero.eat(food1);
      assert.equal(50, hero.health);
    });

    it('should replenish more if favourite', function(){
      hero.health = 0;
      hero.eat(food2);
      assert.equal(8, hero.health);
    });
  });

  describe('Eating poison', function(){
    var hero = new Hero('Sir Sean of Literature', 'Cigarettes');
    var rat = new Rat();
    var food1 = new Food('Burrito', 50);
    
    it('should harm hero if food is poisoned', function(){
      hero.health = 100;
      rat.touch(food1);
      hero.eat(food1);
      assert.equal(50, hero.health);
    });
  });
});
