function makeLast(nums){
  let length =nums.length*2
  let output =[]
  for(i=0;i<length;i++){
    output.push(0)
  }
  
  output[output.length-1]=nums[nums.length-1]
  return output
}