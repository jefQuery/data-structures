var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  this._storage[item] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1) (effectively)
 contains: O(1) (effectively)
 remove: O(1) (effectively)
 */
