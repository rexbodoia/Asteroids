const Util = { 
  inherits(childClass, superClass) {
    childClass.prototype = Object.create(superClass.prototype);
    childClass.prototype.constructor = childClass;
  }   
};

module.exports = Util;