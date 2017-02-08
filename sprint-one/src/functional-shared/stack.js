

var stackMethods = {
	push : function (value) {

	},

	pop : function() {
		return 0;
	},

	size : function() {
		return this.size;
	}
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {size : 0};
  _.extend(obj, stackMethods);

  return obj;
};

// var myStack = Stack;
