var assert = require('assert');
var Food = require('../Food');
var Rat = require('../Rat');

describe('Rat', function(){
  var rat = new Rat();
  var food = new Food('The skulls of his deceased enemies', 100);

  it('should be able to poison food', function(){
    rat.touch(food);
    assert.equal(true, food.poisoned);
    assert.equal(-100, food.replenishmentValue);
  });
});
