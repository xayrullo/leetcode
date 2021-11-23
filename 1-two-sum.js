var twoSum = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let element = 0; element < nums.length; element++) {
        if (index !== element) {
            if(nums[index] + nums[element] === target) {
                return [index, element]
            }
        }
    }
  }
}
var answer = twoSum([2,7,11,15], 9)
console.log(answer)