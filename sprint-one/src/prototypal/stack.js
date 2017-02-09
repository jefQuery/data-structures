var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack._size = 0;
  newStack._storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size++] = value;
};
stackMethods.pop = function() {
  return this._size > 0 ? this._storage[this._size = Math.max(0, --this._size)] : null;
};
stackMethods.size = function() {
  return this._size;
};


