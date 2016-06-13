var expect = chai.expect;

describe('加法测试', function() {
  it('1 + 1 = 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});

describe('jQuery测试', function() {
  it('选择器是否正确', function() {
    expect($('body').length).to.be.equal(1);
  });
});