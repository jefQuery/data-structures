var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[0] = value;
    size++;
  };

  someInstance.pop = function() {
    size = Math.max(0, --size);
    return storage[0];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
