var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._first = 0;
  this._last = 0;
  this._storage = {};
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._last++] = value;
};
Queue.prototype.dequeue = function() {
  return this._first < this._last ? this._storage[this._first++] : null;
};
Queue.prototype.size = function() {
  return this._last - this._first;
};


