(function(root, factory) {
  var isval;
  if (typeof define === 'function' && define.amd) {
    define(['isval'], factory);
  } else if (typeof module === 'object' && module.exports) {
    isval = require('isval');
    module.exports = factory(isval);
  } else {
    isval = root['isval'];
    root['implements'] = factory(isval);
  }
})(this, function(isval) {
   return function implements_(instance, interface_) {
    var methods = [];

    if (!isval(instance, 'object')) {
      throw TypeError('instance is not an Object');
    }

    if (interface_ == null) {
      return true;
    }

    if (Array.isArray(interface_)) {
      methods = interface_;
    } else if (isval(interface_, 'function')) {
      methods = Object.getOwnPropertyNames(interface_.prototype).filter(function(name) {
        return isval(interface_.prototype[name], 'function');
      });
    } else {
      throw new TypeError('interface must be an Array or constructor Function');
    }

    for (var i = methods.length - 1; i >= 0; i--) {
      if (!isval(methods[i], 'string') || !methods[i]) {
        throw new TypeError('interface method name must be a String');
      }

      if (!isval(instance[methods[i]], 'function')) {
        return false;
      }
    }

    return true;
  }
});
