class MyJS {
  constructor(args) {
    this.arg = args

    // function within the constructor, using `this`
    this.addTwo = function(number) {
      return 2 + number
    }
  }

  // function declared outside constructor
  mapAndTwo(arr) {
    return arr.map(this.addTwo)
  }
}

// In object-oriented programming, a class is an extensible
// program-code-template for creating objects, providing
// initial values for state (member variables) and
// implementations of behavior (member functions or methods).
// ~ Wikipedia

// to use:
// node
//  .load javascript.js

// m = new MyJS("fake args")
// m.addTwo(3)
// m.mapAndTwo([1,2,3])
