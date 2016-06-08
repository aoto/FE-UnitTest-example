import Hello from './../../src/browser/index';
import chai from 'chai';

let expect = chai.expect;

describe('浏览器端ES6测试', function() {
  it('正确调用Hello的hi方法', function() {
    var hello = new Hello();
    expect(hello.hi()).to.be.equal('hi');
  });
});
