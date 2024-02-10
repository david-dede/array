function sum13(nums){
  if(nums.length<=0){
    return 0
  }
  let sum=0
  for(i=0;i<nums.length;i++){
    if(nums[i]===13){
        i++
    }
    else{
    sum +=nums[i]}
  }
  return sum
  
}