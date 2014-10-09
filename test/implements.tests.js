var impl = require('../')
  , assert = require('assert');

describe('#implements', function() {
  it('should throw TypeError if instance is not an object', function() {
    assert.throws(function() { impl(); }, /instance/);
    assert.throws(function() { impl(null); }, /instance/);
    assert.throws(function() { impl(false); }, /instance/);
    assert.throws(function() { impl(0); }, /instance/);
    assert.throws(function() { impl(NaN); }, /instance/);
    assert.throws(function() { impl(''); }, /instance/);
    assert.throws(function() { impl(function() {}); }, /instance/);
  });

  it('should return true if no interface supplied', function() {
    assert.ok(impl(new (function Test() { })));
  });

  it('should throw TypeError if interface not Array or constructor', function() {
    var test = new (function Test() { });

    assert.throws(function() { impl(test, 0); }, /interface/);
    assert.throws(function() { impl(test, false); }, /interface/);
    assert.throws(function() { impl(test, NaN); }, /interface/);
    assert.throws(function() { impl(test, ''); }, /interface/);
    assert.throws(function() { impl(test, [0]); }, /interface/);
    assert.throws(function() { impl(test, [false]); }, /interface/);
    assert.throws(function() { impl(test, [NaN]); }, /interface/);
    assert.throws(function() { impl(test, ['']); }, /interface/);
  });

  it('should return true when methods are implemented', function() {
    assert.ok(impl([], ['every', 'forEach', 'indexOf', 'some']));
  });

  it('should return true when a Prototype is implemented', function() {
    assert.ok(impl([], Array));
  });

  it('should return false when methods aren\'t implemented', function() {
    assert.ok(false === impl([], ['doesNotExist']));
    assert.ok(false === impl([], ['every', 'doesNotExist']));
  });

  it('should return false when a Prototype isn\'t implemented', function() {
    assert.ok(false === impl([], String));
  });
});