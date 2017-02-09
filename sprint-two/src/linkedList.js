var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.tail !== null) {
      list.tail.next = node;
    }

    list.tail = node;

    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var headValue = list.head.value;
      list.head = list.head.next;
      return headValue;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    if (list.head !== null) {
      // iterate through head values
      var iNode = list.head;
      while (iNode) {
        if (iNode.value === target) {
          return true;
        }
        iNode = iNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
