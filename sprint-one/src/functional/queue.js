var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last++] = value;
  };

  someInstance.dequeue = function() {
    return last > first ? storage[first++] : null;
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
