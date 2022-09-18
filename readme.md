# Data Structure and Algorithim

### [Closer](https://github.com/KManishY/DSA-All-Topic/blob/master/closers.js)

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
- Every closure has three scopes:
- Local scope (Own scope)
- Enclosing scope (can be block, function, or module scope)
- Global scope

### [Selection_Sort](https://github.com/KManishY/DSA-All-Topic/blob/master/selectionSort.js)

- This algorithm divides the input array into two sublists - a sorted and unsorted sublist. The sorted list is located at the start of the collection, and all elements to the right of the final sorted element are considered unsorted.

- Initially, the sorted list is empty, while the rest of the collection is unsorted. Selection Sort goes through the unsorted sublist and finds the smallest or largest element.

- The element is then swapped with the leftmost element of the unsorted sublist. Then, the sorted sublist is expanded to include that element.

- This is repeated, finding the fitting element, swapping it with the leftmost element of the unsorted list, and expanding the sorted list to encompass it.

- After each iteration, one less element needs to be checked, until the entire array or list is sorted. In other words, after the k-th iteration, the first k elements of the array or list are guaranteed to be sorted.

### [MergeSort]()

- Divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)

- Repeatedly merge the sub array to produce a new sorted subarrys until there is only one sub array remaining. That will be the sorted array




### [Sliding_Window](https://github.com/KManishY/DSA-All-Topic/blob/master/SlidingWindow.js)

*Applying sliding window technique :*

- We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
- Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
- To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block .



### [Curring in JavaScript](https://github.com/KManishY/DSA-All-Topic/blob/master/Currying.js)
- Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

- In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

*Why should we use currying?*

1. Currying is a checking method to make sure that you get everything you need before you proceed
2. It helps you to avoid passing the same variable again and again

3. It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
4. It is used in functional programming to create a higher-order function
5. This could be personal preference, but I love that it makes my code readable