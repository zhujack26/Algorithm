function solution(nums) {
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            for (k = j+1; k < nums.length; k++) {
                let quo = nums[i] + nums[j] + nums[k];
                while (quo > 0) {
                    quo--;
                    if (quo == 1)
                        count++;
                    if ((nums[i] + nums[j] + nums[k]) % quo == 0)
                        break;
                }
            }
        }
    }
    return count;
}
