// Function.prototype.inherits = function(superClass) {
//   function Surrogate(){}
//   Surrogate.prototype = superClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };


const Util = { 
  inherits(childClass, superClass) {
    childClass.prototype = Object.create(superClass.prototype);
    childClass.prototype.constructor = childClass;
  }   
};

module.exports = Util;