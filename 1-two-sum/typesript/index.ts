const twoSum = (nums: Array<number>, target: number): any => {
  const newNums: any = {};

  for (let i = 0; i < nums.length; i++) {
    const num: number = nums[i];
    const result: number = target - num;

    if (Object.keys(newNums).includes(result.toString())) {
      return [newNums[result], i];
    }

    newNums[num] = i;
  }

  return [];
};

const nums: Array<number> = [2, 7, 11, 15];
const target: number = 10;

const result = twoSum(nums, target);
console.log(result);
