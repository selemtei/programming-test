# Question 6

Here are two solutions to the following problem: given an array of integers, find two numbers such that they add up to a specific target number.

Here is a solution utilising lists.

```python
def two_sum_list(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

Here is a solution utilising sets:

```python
def two_sum_set(nums, target):
    seen = set()
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [nums.index(complement), i]
        seen.add(num)
    return []
```

Compare the two solutions, and discuss reasons why you might prefer one over the other. Can you think of any other solutions?

