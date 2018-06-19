'use strict';
var app    = require('./permutations');
var assert = require('assert');

describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a true value, this means that is a permutation.', () => {
    assert.equal(true, app.areThisWordsPermutations("cara","arca"));
  });
});

describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a false value, this means that is not a permutation.', () => {
    assert.equal(false, app.areThisWordsPermutations("cara", "aca"));
  });
});

describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a false value, this means that is not a permutation.', () => {
    assert.equal(false, app.areThisWordsPermutations("a", "s"));
  });
});

describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a false value, this means that is not a permutation.', () => {
    assert.equal(false, app.areThisWordsPermutations("ab", "sc"));
  });
});


describe('Validate that the string provide is a permutation.', () => {
  it('It should be able to return a true value, this means that is a permutation.', () => {
    assert.equal(true, app.areThisWordsPermutations("arco", "cora"));
  });
});