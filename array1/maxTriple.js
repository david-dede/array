function maxTriple(nums){
let length=(nums.length)/2

let mid=Math.floor(length)
return Math.max(nums[0],nums[mid],nums[nums.length-1])
}