export function containsDuplicate(nums) {
    const gorulenler = new Set();
    for (let x = 0; x <= nums.length-1; x++){
        gorulenler.add(nums[x])
        if (gorulenler.has(nums[x+1])){
            return true
        }
    }
    return false





}
