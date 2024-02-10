function findMinIndex(nums) {
    let min = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[min]) {
            min = i;
        }
    }
    return min;
}

