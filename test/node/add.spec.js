var add = require('./../../src/node/add');
var expect = require('chai').expect;

describe('加法测试-ES5', function() {
  it('1 + 1 = 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});