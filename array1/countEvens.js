function countEvens(nums){
  let even=0
  for(i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        even++
    }
  }
  return even
}