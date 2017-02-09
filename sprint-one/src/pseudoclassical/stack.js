var Stack = function() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function(value) {
  this._storage[this._size++] = value;
};
Stack.prototype.pop = function() {
  return this._storage[this._size = Math.max(0, --this._size)];
};
Stack.prototype.size = function() {
  return this._size;
};
