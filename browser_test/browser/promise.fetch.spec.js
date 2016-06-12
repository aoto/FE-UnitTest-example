var expect = chai.expect;

describe('Promise测试', function() {
  it('Promise返回是否正确', function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(1);
      }, 1000);
    }).then(function(val) {
      expect(val).to.be.equal(1);
    });
  });

  it('Fetch返回是否正确', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});