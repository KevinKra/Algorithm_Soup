# Algorithms and Coffee

This material has been collected from multiple sites. I highly recommend visiting the sites for additional information and resources.

### Sections

- [Resources](#resources)
- [Foundations](#foundations)

## Foundations

[](#foundations)

> By the end of this module you should be able to confidently speak about these topics:

1. Basic Data Structures: Arrays, Strings, Stacks, Queues.
2. Asymptotic analysis (Big-O notation)
3. Basic math operations
4. Sqrt(n) primality testing
5. Euclid's GCD Algorithm
6. Basic Recursion
7. Greedy Algorithms
8. Basic Dynamic Programming
9. Naive String Searching
10. O(n logn) Sorting
11. Binary Searching

### Questions

> You should be able to speak at detail about these topics without notes. Challenge yourself and see how you do.

1. What is time complexity and why is it important?
2. What is a prime number?
3. What is BigO notation?
4. What are the types of measurement for BigO notation? What case does BigO focus on and why?
5. What are the general rules of BigO notation?
6. Order BigO operations from most efficient to least efficient.
7. Describe constant time?
8. Describe linear time?
9. Describe quadratic Time?
10. What is the run time ( `O(?)` ) of the following problem?

```node
 x = 5 + (15 * 20)
 for x in range (0,n):
  print x;
 for x in range (0, n):
  for y in range (0, n):
    print x * y;
```

11. What does it mean to not care about constants?
12. What is the general (interview appropriate) approach to solving a computational problem?
13. What is `Asymptotic notation`?
14. What is an algorithm, and what are two important considerations regarding an algorithm?
15. How is algorithm efficiency measured?
16. Explain a `linear search` algorithm.
17. Explain a `binary search` algorithm.
18. What formula can be used to determine a binary search's total required iterations?
19. Explain how a `route-finding` / `path-search` algorithm works.
20. Give an example of how a `binary search` would locate a number in an array in english.
21. What is the opposite of exponential growth?
22. How would a `linear search (n)` vs a `binary search (log2(n))` appear on a graph?
23. How can you compare the maximum guesses of a linear search against a binary search?
24. What type of an array is a binary search suitable for, what about a linear search?
25. How do you determine the value of a base-2 logarithmic function? ex: log2(32);
26. You have an array containing the prime numbers from 2 to 311 in sorted order: [2, 3, 5, 7, 11, 13, ..., 307, 311]. There are 64 items in the array. About how many items of the array would binary search have to examine before concluding that 52 is not in the array, and therefore not prime?

### Answers

> Do not look over these notes while practicing the questions. Doing so will only hinder your learning and serve as a crutch that wont be available during interviews.

1. Time complexity is the expense in time for a computational program to execute. By using appropriate algorithms, an engineer can shorten the time required to solve operations. This is especially important in programs of scale where thousands of operations may be expected to run over the lifetime of a programs operation, if every process can be reduced even by a few milliseconds the total time required can be drastically shortened. To drive the point home, a simple calculation may take 115 days with one approach, but a mere 1.5 minutes for another algorithmic approach ( `O(n)` vs. `O(sqrt(n))`).
2. A prime number is a number that is divisible only by **two** numbers, one and itself. Ex: 2, 3, 5, 7, 11, 100003.
3. `BigO notation` is a simplified analysis of an algorithms efficiency with complexity in terms of input size: N. It is a machine-independent analysis (spec of the computer don't matter), and instead focuses on computer steps to analyze both time and space.
4. Worst-case, average-case, best-case. BigO typically looks at the worst-case, because the worst-case algorithm dominates the entire run time process.
5. Ignore constants, certain terms "dominate" others (ignore low-order terms, see answer 6).
6. `O(1) < O(logn) < O(nlogn) < O(n^2) < O(2^n) < O(n1)`
7. `O(1)` "Big O of one". `x = 5 + (15 * 20);`. Independent of input size, N.
8. Linear time example:

```node
  // O(1);
  y = 5 + (15 * 20);
  // O(n);
  for x in range (0, n):
    print x;

  // total time = O(1) * O(n) = O(n);
  // We drop lower order terms, when N gets large, the time to compute Y is meaningless
  // as the for loop dominations the run time, thus O(2).
```

9. Quadratic time example:

```node
for x in range (0,n):
  for y in range (0,2):
    print (x * y) // O(1)

// total time: O(n^2)
```

10. `Line 1:` Constant time O(1), `Line 2:` Linear time O(n), `Lines 4, 5:` Quadratic time O(n^2). The nested for loop dominates here, thus **the dominate defining complexity is O(n^2), or quadratic time.**
11. Constants are irrelevant in BigO notation. For instance, it doesn't matter where the constant is `3n^2` or `5n^2`, we simply care about the `n^2`.
12. Write out the problem, determine the potential solutions (algorithms) to the problem, and consider each algorithms cost in time and memory.
13. ========
14. An algorithm is a set of steps followed to accomplish a task. Correctness (optional) and Efficiency. Sometimes the approach needed to correctly solve something may be unavoidably long, the next best option is to find the best solution that solves the problem in the shortest amount of time. In some cases, good is good enough.
15. Computer scientists use a technic called `Asymptotic Analysis`, or a form of measurement that ignores the specific implementations of a sample (hardware specs, language efficiency, etc). This allows algorithms to be compared independently of programming language or hardware, so that we can conclusively determine which algorithms are more efficient than others.
16. If given a series of numbers, (1, 16), the computer chooses one number from the pool. Guessing the correct number by incrementing from 1, 2, 3, and so on, is an example of a linear search. Average amount of guesses will be 8, or half the size of the pool.
17. If given a series of numbers, (1, 16), the computer chooses one number from the pool. If the computer tells you the number is too high / too low, you can effectively start at the middle of the pool and rule out half the numbers for being too high or too low. This halving approach is called a `binary search` and no matter what the computer selects, it should only take at most 4 guesses to find the predetermined number.
18. at most `log2(total_array_size)` or `base-2 logarithm of n`.
19. In the example provided by khan academy, the path-finding algorithm starts and the destination point then determines each series of steps from the destination to the source or starting point. Each step is given a number value and next steps afterwards each iterate on that value until the starting point is reached.
20. There is an array with 24 elements with each element being a prime number in order, we are looking for the prime number 67. 24 / 2 = 12, the first guess would be at index position 12, the value would be 41. 41 < 67. Therefore, we can rule out all indexes before 12 are too small. The average between the remaining indexes (13 and 24) is 18.5, we then check index 18 and we find our matching value.
21. Logarithmic growth. 2^7 = 128, log2(128) = 7;
22. Linear is a straight line, log immediately begins to flatten after the initial point.
23. if `n` (length of a sorted array for example) = 50,000. Binary Search: log2(50000) = 15.6, or 16 guesses. Linear Search: 50000, or 50,000 potential guesses.
24. A binary search is suitable for sorted arrays, a linear search is suitable for unsorted arrays.
25. Divide the number by half until you reach the value 1, the final count determines the log value. `32 / 2 = 16 (1), 16 / 2 = 8 (2), 8 / 2 = 4 (3), 4 / 2 = 2 (4), 2 / 2 = 1 (5)`
26. 7 times. 6 times as a result of the log, plus once more to confirm the location.

---

### Resources:

[](#resources)

- [CodeChef](https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation) - the foundation of this readme.
- [KhanAcademy](https://www.khanacademy.org/computing/computer-science/algorithms#intro-to-algorithms) - Algorithm overview.
