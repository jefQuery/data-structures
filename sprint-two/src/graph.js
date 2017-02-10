

// Instantiate a new graph
var Graph = function() {
  this.value = null;
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  node = new Graph;
  node.value = value;
  this.nodes.push(node);
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return true;
    }
  }
  return false;
};

Graph.prototype._getNode = function(value) { //helper function
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return this.nodes[i];
    }
  }
  return null;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      var nodeToRemove = this.nodes[i];
      for (var j = 0; j < nodeToRemove.nodes.length; j++) {
        var targetArray = nodeToRemove.nodes[j].nodes;
        // this.removeEdge(nodeToRemove.nodes[j].value, nodeToRemove.value);
        targetArray.splice(targetArray.indexOf(nodeToRemove), 1);//???? O(n) || O(n^2)
      }
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  if (this._getNode(fromValue) !== null) {
    return this._getNode(fromValue).contains(toValue);
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  var fromNode = this._getNode(fromValue);
  var toNode = this._getNode(toValue);
  toNode.nodes.push(fromNode);
  fromNode.nodes.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  var toNode = this._getNode(toValue);
  var fromNode = this._getNode(fromValue);
  toNode.nodes.splice(toNode.nodes.indexOf(fromNode), 1);
  fromNode.nodes.splice(fromNode.nodes.indexOf(toNode), 1);
};

// Returns the number of edges for the node
Graph.prototype.edgeCount = function(value) {
  return this._getNode(value).nodes.length;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    var item = this.nodes[i].value;
    cb(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
+ addNode: O(1)
+ contains: O(n)
+ removeNode: O(n^2) // for discussion!
+ hasEdge: O(n)
+ addEdge: O(n)
+ removeEdge: O(n)
+ forEachNode: O(n)
 */


