'use strict';
var app    = require('./unique');
var assert = require('assert');

describe('Validate that the string is compossed from unique characters..', () => {
  it('It should be able to return a false value.', () => {
    assert.equal(false, app.isUniqueDC("casss"));
  });
});

