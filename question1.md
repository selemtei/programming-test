# Question 1

Given an integer _n_, write a function that returns a string array where:

- The _i_-th item contains the string "Pop" if the _i_-th integer is divisible by 3.
- The _i_-th item contains the string "Snap" if the _i_-th integer is divisible by 5.
- The _i_-th item contains the string "PopSnap" if the _i_-th integer is divisible by 3 and 5.
- The _i_-th item contains _i_ (as a string) if the _i_-th integer is not divisible by 3 or 5.

## Constraints:

- 1 <= n <= 100
 
## Examples

```
Input: n = 3
Output: ["1","2","Pop"]
```

```
Input: n = 5
Output: ["1","2","Pop","4","Snap"]
```

```
Input: n = 15
Output: ["1","2","Pop","4","Snap","Pop","7","8","Pop","Snap","11","Pop","13","14","PopSnap"]
```

