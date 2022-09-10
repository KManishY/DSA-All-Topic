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

### [Sliding_Window](https://github.com/KManishY/DSA-All-Topic/blob/master/SlidingWindow.js)

*Applying sliding window technique :*

- We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
- Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
- To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block .