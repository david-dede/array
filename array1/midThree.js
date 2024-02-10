function midThree(nums){
    let center=nums.length/2
    let ccenter=Math.round(center)
    return [nums[ccenter-2],nums[ccenter-1],nums[ccenter-0]]
  
}