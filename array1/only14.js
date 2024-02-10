// Given an array of ints, return true if every element is a 1 or a 4.

// Examples

// only14([1, 4, 1, 4]) → true
// only14([1, 4, 2, 4]) → false
// only14([1, 1]) → true



function only14(nums){
    let newdata=[]
for(num of nums){
    if(num===4||num===1){
        newdata.push(num)
    }
}
if(nums.length===newdata.length){
    return true
}
return false
}

console.log(only14([1, 4, 1, 4]));