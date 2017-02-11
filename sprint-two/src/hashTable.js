var HashTable = function(limit = 8) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    var bucket = [tuple];
    this._storage.set(index, bucket);
  } else {
    var found = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        found = true;
      }
    }
    if (!found) {
      bucket.push(tuple);
    }
  }

  // Array size management
  this._tupleCount++;
  if (this._tupleCount > 0.75 * this._limit) {
    var newHash = new HashTable(this._limit * 2);

    this._storage.each(function(oldBucket, i) {
      if (oldBucket) {
        for (var j = 0; j < oldBucket.length; j++) {
          var oldTuple = oldBucket[j];
          newHash.insert(oldTuple[0], oldTuple[1]);
        }
      }
    });

    this._limit = newHash._limit;
    this._storage = newHash._storage;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if (!Array.isArray(bucket)) {
  if (!bucket) {
    console.log('No bucket for the value!');
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
    console.log('Value not found in bucket!');
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // remove
      bucket.splice(i, 1);
      break;
    }
  }

  //Array mgmt., shrinking
  this._tupleCount--;
  if (this._tupleCount < 0.25 * this._limit) {
    var newHash = new HashTable(this._limit / 2);

    this._storage.each(function(oldBucket, i) {
      if (oldBucket) {
        for (var j = 0; j < oldBucket.length; j++) {
          var oldTuple = oldBucket[j];
          newHash.insert(oldTuple[0], oldTuple[1]);
        }
      }
    });

    this._limit = newHash._limit;
    this._storage = newHash._storage;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: average: O(1), worst case: O(n)
 Retrieve: average: O(1), worst case: O(n)
 Remove: average: O(1), worst case: O(n)
 */
