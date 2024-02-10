function setLargerToAll(nums) {
    let first = nums[0];
    let last = nums[nums.length - 1];
    let max = Math.max(first, last);

    let result = [max, max, max];

    return result;
}