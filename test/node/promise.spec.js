var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('异步测试-Promise', function() {
  it('Promise返回是否正确', function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(1);
      }, 1000);
    }).then(function(val) {
      expect(val).to.be.equal(1);
    });
  });

  it('异步请求应该返回一个对象', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});