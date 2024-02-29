# Here's a comparison of the two approaches and reasons why one might prefer one over the other:

# Time Complexity:
# # The list-based solution iterates through all possible pairs of numbers, resulting in a time complexity of O(n^2), where n is the length of the input array. This is because it uses nested loops.
# The set-based solution has a time complexity of O(n) since it only requires a single pass through the array. It uses a set to keep track of the numbers seen so far and checks if the complement (the difference between the target and the current number) exists in the set.

# Space Complexity:
# The list-based solution doesn't use additional space apart from the input array and the return list.
# The set-based solution uses additional space to store the set of seen numbers, which could be a concern for very large arrays. However, the space complexity is still O(n) because the set will not grow larger than the size of the input array.

# Conclusion
# In terms of preference, the set-based solution is generally preferred due to its linear time complexity and relatively better efficiency, especially for large arrays. However, the list-based solution might be preferable for very small arrays or cases where memory usage is a concern.


# Other Solution
# Here's another solution using a dictionary to optimize the search for the complement
# This solution has similar time and space complexities to the set-based solution but uses a dictionary for faster lookups
# compared to the list-based approach. It trades a bit of space for potentially faster lookup times.

def two_sum_dict(nums, target):
  num_dict = {}
  for i, num in enumerate(nums):
    complement = target - num
    if complement in num_dict:
      return [num_dict[complement], i]
    num_dict[num] = i
  return []