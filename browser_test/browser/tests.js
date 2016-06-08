var expect = chai.expect;

describe('加法测试', function() {
  it('1 + 1 = 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});

describe('jQuery测试', function() {
  it('选择器是否正确', function() {
    expect($('#myid').find('span').length).to.be.equal(2);
  });
});

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

chai.should();
describe('AJAX测试', function() {
  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();

    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });

  afterEach(function() {
    this.xhr.restore();
  });

  it('GET请求参数正确', function(done) {
    var data = {
      foo: 'bar'
    };
    var dataJson = JSON.stringify(data);

    myapi.get(function(result, err) {
      result.should.deep.equal(data);
      done();
    });

    this.requests[0].respond(200, {
      'Content-Type': 'text/json'
    }, dataJson);
  });

  it('POST请求参数正确', function() {
    var data = 'hello=world';
    var dataJson = data;

    myapi.post(data, function() {});

    this.requests[0].requestBody.should.equal(dataJson);
  });

  it('捕获服务器错误', function(done) {
    myapi.get(function(result, err) {
      err.should.exist;
      done();
    });

    this.requests[0].respond(500);
  });
});