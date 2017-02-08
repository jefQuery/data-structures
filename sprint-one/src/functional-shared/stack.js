var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  _.extend(newStack, Stack.stackMethods);

  return newStack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value) { 
  
};

Stack.stackMethods.pop = function() {
  
};

Stack.stackMethods.size = function() {
  return 0;
};
