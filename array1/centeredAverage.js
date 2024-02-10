function centeredAverage(nums){
    let min=Math.min(...nums)
    let max=Math.max(...nums)

    nums.splice(nums.indexOf(min),1)
    nums.splice(nums.indexOf(max),1)

    // return nums
    let sum=0
    for(i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    let ave= (sum/nums.length)
    return ave
}