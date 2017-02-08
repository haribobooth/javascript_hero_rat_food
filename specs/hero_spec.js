var assert = require('assert');
var Hero = require('../Hero');

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
});
