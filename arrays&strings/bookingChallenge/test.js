/*var x = howManyAgentsToAdd(1,[ 
    [ 1481122000, 1481122020 ],
    [ 1481122000, 1481122040 ],
    [ 1481122030, 1481122035 ] 
  ])

  console.log(x)*/

'use strict';
var app    = require('./booking');
var assert = require('assert');

describe('Validate that the values provided here are forming a triangle.', () => {
  it('It should be able to return a equilateral triangle, that is expressed by a return value of 1.', () => {
    assert.equal(1, app.isThisATriangle(6,6,6));
  });
});



describe('Validate that the values provided here are forming a triangle.', () => {
  it('It should be able to return a equilateral triangle, that is expressed by a return value of 1.', () => {
    assert.equal(1, app.isThisATriangle(10,10,10));
  });
});


describe('Validate that the values provided here are forming a triangle.', () => {
  it('It should be able to return a non triangle, that is expressed by a return value of 0.', () => {
    assert.equal(0, app.isThisATriangle(0,10,10));
  });
});

describe('Validate that the values provided here are forming a triangle.', () => {
  it('It should be able to return a non triangle, that is expressed by a return value of 0.', () => {
    assert.equal(0, app.isThisATriangle(0,0,0));
  });
});

describe('Validate that the values provided here are forming a triangle.', () => {
  it('It should be able to return a non triangle, that is expressed by a return value of 0.', () => {
    assert.equal(0, app.isThisATriangle(null,null,null));
  });
});