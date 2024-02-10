// Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

// Examples

// sum28([2, 3, 2, 2, 4, 2]) → true
// sum28([2, 3, 2, 2, 4, 2, 2]) → false
// sum28([1, 2, 3, 4]) → false


function sum28(nums) {
    let twos=[]
for(num of nums){
    if(num===2){
        twos.push(num)
    }
}
if(twos.length===4){
    return true
}
return false
}
console.log(sum28([2, 3, 2, 2, 4, 2]));