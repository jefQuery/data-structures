var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.removeChild = function(value) {
  for (var i = 0; i < this.children.length; i++) {
    var node = this.children[i];
    if (node.value === value) {
      this.children.splice(i, 1);
      return true;
    }
  }
  return false;
};


treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
