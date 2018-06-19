'use strict';
var app    = require('./stringCompression');
var assert = require('assert');

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a compressed string value, this means that the compressed one is shortest than the original one.', () => {
    assert.equal("a2A1b1c5a3", app.isSmallerTheCompressedString("aaAbcccccaaa"));
  });
});

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a compressed string value, this means that the compressed one is shortest than the original one.', () => {
    assert.equal("a5", app.isSmallerTheCompressedString("aaaaa"));
  });
});

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a compressed string value, this means that the compressed one is shortest than the original one.', () => {
    assert.equal("aba", app.isSmallerTheCompressedString("aba"));
  });
});

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a compressed string value, this means that the compressed one is shortest than the original one.', () => {
    assert.equal("a3b1c4d2a1", app.isSmallerTheCompressedString("aaabccccdda"));
  });
});

describe('Validate that the first string is only one add far from the second onde..', () => {
  it('It should be able to return a compressed string value, this means that the compressed one is shortest than the original one.', () => {
    assert.equal("a3b2c2", app.isSmallerTheCompressedString("aaabbcc"));
  });
});

