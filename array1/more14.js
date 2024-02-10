// Given an array of ints, return true if the number of 1's is greater than the number of 4's

// Examples

// more14([1, 4, 1]) → true
// more14([1, 4, 1, 4]) → false
// more14([1, 1]) → true




function more14(nums) {
let fours=[]
let ones =[]

for(num of nums){
    if(num===4){
       fours.push(num) 
    }
    if(num===1){
        ones.push(num)
    }
}
if(ones.length>fours.length){
    return false
}
else{
return true}

}

console.log(more14([1, 1]));