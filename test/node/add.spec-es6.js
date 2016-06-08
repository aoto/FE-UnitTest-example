import add from './../../src/node/add-es6';
import chai from 'chai';

let expect = chai.expect;

describe('加法测试-ES6', function() {
  it('1 + 1 = 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});