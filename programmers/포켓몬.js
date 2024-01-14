function solution(nums) {
    let temp = [];
    for (i = 0; i < nums.length; i++) {
        if (!temp.includes(nums[i])) {
            temp.push(nums[i]);    
        }
    }
    return temp.length <= nums.length / 2 ? temp.length : nums.length / 2
}
