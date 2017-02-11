describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  // it('should add to tail in constant time', function() {
  //   var profileAdd1Tail = function() {
  //     var count = 100000;
  //     for (var i = 0; i < count; i++) {  
  //       linkedList.addToTail(i);
  //     }
  //   };
  //   profileAdd1Tail();

  // });

  // it('should add 10x tails in 10x the time', function() {
  //   var profileAdd2Tail = function() {
  //     var count = 1000000;
  //     for (var i = 0; i < count; i++) {  
  //       linkedList.addToTail(i);
  //     }
  //   };
  //   profileAdd2Tail();
  
  // });

  // it('should add 100x tails in 100x the time', function() {
  //   var profileAdd3Tail = function() {
  //     var count = 10000000;
  //     for (var i = 0; i < count; i++) {  
  //       linkedList.addToTail(i);
  //     }
  //   };
  //   profileAdd3Tail();

  // });
  //            Add1    Add 2    Add3
  //Run 1(ms):  7       88       630
  //Run 2(ms):  8       91       658
  //Run 3(ms):  9       101      738 
  //Conclusion: We know the for loop creates a O(n) time complexity, and
  //the result shows experimentally an O(n) time complexity.
  //Therefore the nested LinkedList call contributes O(1) time complexity;

  //Heap Snapshots
  it('should add to tail in constant time', function() {
    var profileAdd1Tail = function() {
      var count = 10000000;
      for (var i = 0; i < count; i++) {  
        linkedList.addToTail(i);
      }
      for (var i = 0; i < count; i++) {  
        linkedList.removeHead();
      }
    };
    profileAdd1Tail();

  });

  // Snapshot size changed from 4.6 to 4.7 MB, 100k of memory leaking
  // Snapshot Objects size changed from 1668 to 1664, showing no difference 
  // between before and after (exact garbage collection of linked list objects)
});
