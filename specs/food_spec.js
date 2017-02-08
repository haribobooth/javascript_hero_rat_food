var assert = require('assert');
var Food = require('../Food');
var Hero = require('../Hero')

describe('Food', function() {
  var food = new Food('Soup', 25);
  it('should have a name', function(){
    assert.equal('Soup', food.name);
  });

  it('should have a replenishmentValue', function(){
    assert.equal(25, food.replenishmentValue);
  });

  it('should start healthy', function(){
    assert.equal(false, food.poisoned);
  });
});
