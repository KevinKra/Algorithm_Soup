# Algorithms and Coffee

This material has been collected from multiple sites. I highly recommend visiting the sites for additional information and resources.

### Sections

- [Resources](#resources)
- Foundations

## Foundations

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

```
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

---

### Resources:

[](#resources)

[CodeChef](https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation) - the foundation of this readme.
[KhanAcademy](https://www.khanacademy.org/computing/computer-science/algorithms#intro-to-algorithms) - Algorithm overview.
