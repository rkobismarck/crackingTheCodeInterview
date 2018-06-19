'use strict';
var app    = require('./rotation');
var assert = require('assert');

describe('Validate that the second string is a rotated version of the first string .', () => {
  it('It should be able to return a false value, since that we are just injecting undefined values for both arguments.', () => {
    assert.equal(false, app.isSubstring());
  });
});

describe('Validate that the second string is a rotated version of the first string .', () => {
  it('It should be able to return a false value, since that we are just in front of two different sized words.', () => {
    assert.equal(false, app.isSubstring("arcas", "sarc"));
  });
});


describe('Validate that the second string is only one rotated version from the first one.', () => {
  it('It should be able to return a true value, this means that the second string is only a rotated version of the first one.', () => {
    assert.equal(true, app.isSubstring("waterbottle", "erbottlewat"));
  });
});


describe('Validate that the second string is only one rotated version from the first one.', () => {
  it('It should be able to return a true value, this means that the second string is only a rotated version of the first one.', () => {
    assert.equal(true, app.isSubstring("arguments", "tsargumen"));
  });
});


/* Considerations
1.- First and second argument must have the same number of characters.
2.- Both of them must have non empty size.
*/
