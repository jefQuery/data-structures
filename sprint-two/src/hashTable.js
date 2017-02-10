

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index) || [tuple];

  for (var i = 0; i <= bucket.length; i++) {
    if (bucket[i] === undefined) {
      bucket.push(tuple);
      break;
    } else if (bucket[i][0] === k) {
      bucket[i] = tuple;
      break;
    }
  }
  
  this._storage.set(index, bucket);

  //advanced work:
  //if this._storageUsed * 0.75 >= this._storage.length
    //this._limit = this._limit * 2;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = undefined;
    }
  }
  this._storage.set(index, bucket);

  //advanced work:
  //if this._storageUsed * 0.25 <= this._storage.length
    //this._limit = this._limit / 2;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
