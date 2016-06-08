var fetch = require('isomorphic-fetch');
var expect = require('chai').expect;

describe('异步测试-Promise', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});