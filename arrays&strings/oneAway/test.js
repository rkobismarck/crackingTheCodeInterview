'use strict';
var app    = require('./oneAway');
var assert = require('assert');

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a true value, this means that is only needed one character add to the first string.', () => {
    assert.equal(true, app.checkOneAway("aka", "baka"));
  });
});

describe('Validate that the first string is only one edit far from the second onde..', () => {
  it('It should be able to return a true value, this means that is only needed one character edited to the first string.', () => {
    assert.equal(true, app.checkOneAway("a", "b"));
  });
});

describe('Validate that the first string is only one edit far from the second onde..', () => {
  it('It should be able to return a false value, this means that is needed more than one edition, add or remove into the first string.', () => {
    assert.equal(false, app.checkOneAway("a", "bac"));
  });
});

describe('Validate that the first string is only one edit far from the second onde..', () => {
  it('It should be able to return a true value, this means that is needed only one character adding into the first string.', () => {
    assert.equal(true, app.checkOneAway("ba", "bac"));
  });
});