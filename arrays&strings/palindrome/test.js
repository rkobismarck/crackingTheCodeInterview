'use strict';
var app    = require('./palindrome');
var assert = require('assert');

describe('Validate that the string provide is a palindrome.', () => {
  it('It should be able to return a false value, this means that is not a palindrome.', () => {
    assert.equal(false, app.isThisAPalindrome("tact coa"));
  });
});

describe('Validate that the string provide is a palindrome.', () => {
  it('It should be able to return a false value, this means that is not a palindrome.', () => {
    assert.equal(false, app.isThisAPalindrome("tact ca"));
  });
});

describe('Validate that the string provide is a palindrome.', () => {
  it('It should be able to return a false value, this means that is not a palindrome.', () => {
    assert.equal(true, app.isThisAPalindrome("Animal loots foliated detail of stool lamina"));
  });
});

describe('Validate that the string provide is a palindrome.', () => {
  it('It should be able to return a false value, this means that is not a palindrome.', () => {
    assert.equal(true, app.isThisAPalindrome("Art, name no tub time. Emit but one mantra."));
  });
});

describe('Validate that the string provide is a palindrome.', () => {
  it('It should be able to return a false value, this means that is not a palindrome.', () => {
    assert.equal(true, app.isThisAPalindrome("a, A."));
  });
});
