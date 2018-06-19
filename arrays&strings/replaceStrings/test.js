'use strict';
var app    = require('./replaceString');
var assert = require('assert');

describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a true value, this means that is a permutation.', () => {
    assert.equal("Mr%20John%20Smith", app.replaceString("Mr John Smith    ","13", "", "%20"));
  });
});

