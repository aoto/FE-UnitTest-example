var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;
  var bar = false;

  // 执行一次
  before(function() {
    foo = true;
  });

  // 每次执行
  beforeEach(function() {
    bar = true;
  });

  it('修改全局变量应该成功', function() {
    expect(foo).to.be.equal(true);
    expect(bar).to.be.equal(true);
  });
});