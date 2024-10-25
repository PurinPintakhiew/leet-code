package main

import "fmt"

func twoSum(nums []int, target int) []int {
	newNums := make(map[int]int)

	for i, n := range nums {
		result := target - n

		if idx, found := newNums[result]; found {
			return []int{idx, i}
		} else {
			newNums[n] = i
		}
	}

	return nil
}

func main() {
	target := 10
	nums := []int{1, 2, 11, 15, 7}

	newNums := twoSum(nums, target)
	fmt.Println(newNums)
}
