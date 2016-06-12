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