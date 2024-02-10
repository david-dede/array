// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

// no14([1, 2, 3]) → true
// no14([1, 2, 3, 4]) → false
// no14([2, 3, 4]) → true


function no14(nums) {

for(num of nums){

    if(num===4&&num===1){
    return false
}
if (num===1){
    return true
}
if(num===4){
    return true
}
}
// return false

}


console.log(no14([1, 2, 3]));