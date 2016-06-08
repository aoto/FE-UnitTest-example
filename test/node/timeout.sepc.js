var expect = require('chai').expect;

describe('超时测试', function() {
  it('4000毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done();
    };
    setTimeout(f, 4000);
  });
});
