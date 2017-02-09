var Queue = function() {
  var newQueue = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue._first = 0;
  newQueue._last = 0;
  newQueue._storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this._storage[this._last++] = value;
};
queueMethods.dequeue = function () {
  return this._first < this._last ? this._storage[this._first++] : null;
};
queueMethods.size = function () {
  return this._last - this._first;
};