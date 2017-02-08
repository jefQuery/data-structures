var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack._storage = {};
  newStack._size = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) { 
  this._storage[this._size++] = value;
};

stackMethods.pop = function() { 
  return this._size === 0 ? null : this._storage[Math.max(0, --this._size)];
};

stackMethods.size = function() {
  return this._size;
};
