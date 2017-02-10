var BinarySearchTree = function(value) {
  var treeNode = {};
  treeNode.left = null;
  treeNode.right = null;
  treeNode.value = value;

  treeNode.insert = function(value) {
    if (value > treeNode.value) {
      if (treeNode.right === null) {
        treeNode.right = BinarySearchTree(value);
      } else {
        treeNode.right.insert(value);
      }
    } else if (value < treeNode.value) {
      if (treeNode.left === null) {
        treeNode.left = BinarySearchTree(value);
      } else {
        treeNode.left.insert(value);
      }
    }
  };

  treeNode.contains = function(value) {
    if (value > treeNode.value) {
      if (treeNode.right === null) {
        return false;
      } else {
        return treeNode.right.contains(value);
      }
    } else if (value < treeNode.value) {
      if (treeNode.left === null) {
        return false;
      } else {
        return treeNode.left.contains(value);
      }
    } else {
      return true;
    }
  };

  treeNode.depthFirstLog = function(cb) {
    cb(treeNode.value);
    if (treeNode.left !== null) {
      treeNode.left.depthFirstLog(cb);
    }
    if (treeNode.right !== null) {
      treeNode.right.depthFirstLog(cb);
    }
  };

  //var TreeNode = function(value)
  return treeNode;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: Θ(log n), O(n)
contains: Θ(log n), O(n)
depthFirstLog: O(n)
 */
