// // `Stack is used for static memory allocation and Heap for dynamic memory allocation, both stored in the computer's RAM` .

// // Variables allocated on the stack are stored directly to the memory and
// // access to this memory is very fast, and it's allocation is dealt
// // with when the program is compiled. When a function or a method
// // calls another function which in turns calls another function etc.,
// // the execution of all those functions remains suspended until the very
// // last function returns its value. The stack is always reserved in a LIFO order,
// // the most recently reserved block is always the next block to be freed.
// // This makes it really simple to keep track of the stack, freeing a block from the stack is
// // nothing more than adjusting one pointer.

// // Variables allocated on the heap have their memory
// // allocated at run time and accessing this memory is a
// // bit slower, but the heap size is only limited by
// // the size of virtual memory . Element of the heap
// // have no dependencies with each other and can always
// // be accessed randomly at any time. You can allocate a block
// // at any time and free it at any time.
// // This makes it much more complex to keep track of which parts of
// // the heap are allocated or free at any given time.

// // You can use the stack if you know exactly
// // how much data you need to allocate before compile time and it is not too big.
// // You can use heap if you don't know exactly how much data you will need at runtime or if
// // you need to allocate a lot of data.

// // In a multi-threaded situation each thread will have its own completely independent stack but they will share the heap. Stack is thread specific and Heap is application specific. The stack is important to consider in exception handling and thread executions.

// https://user-images.githubusercontent.com/25385196/132331589-d3b99b5b-607d-455e-82ee-b7e81c831b62.png

// https://user-images.githubusercontent.com/25385196/132331923-92457140-a3e6-4eb3-9556-abf6b87ba000.png

// Shallow -Copy

// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

// example
// let x={"a":1,"b":2};
// let y=x;  //It makes a copy of the reference to x into y

// So, the addresses of x and y will be the same i.e. they will be pointing to the same memory location.
// so if you do this
// y.a=9;
// and now when you print y on the screen
// console.log(y) // it prints {"a":9,"b":2};
// but the interesting fact here is ,when you print x
// console.log(x)  // it also prints {"a":9,"b":2};

// So Now how to change this scenario??.The solution is deep copy

// Deep copy

// A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

// in lehman terms you create a variable y allocate it a different memory location ,copy all the members of x,assign the copied members to y

// the most easiest way to do is by stringifying the object
// let y=JSON.parse(JSON.stringify(x))
// now if we do
// y.a=9

// and print y
// console.log(y) // it prints {"a":9,"b":2};

// and if we print x
// console.log(x) //  it prints {"a":1,"b":2};
