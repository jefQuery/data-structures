var Queue = function() {
  var newQueue = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue._first = 0;
  newQueue._last = 0;
  newQueue._storage = {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._last++] = value;
};

queueMethods.dequeue = function() {
  if (this._last > this._first) {
    return this._storage[this._first++];
  } else {
    return null;
  }
};

queueMethods.size = function() {
  return this._last - this._first;
};