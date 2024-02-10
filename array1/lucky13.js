// Given an array of ints, return true if the array contains no 1's and no 3's.

// Examples

// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false



function lucky13(nums) {
  for (num of nums) {
    if (num === 3 || num === 1) {
      return false;
    }
  }
  return true;
}
console.log(lucky13([1, 2, 4]));