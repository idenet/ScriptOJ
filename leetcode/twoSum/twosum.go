package main

import (
	"fmt"
)

// 不存在的int会返回0
func twosum(nums []int, target int) (int, int) {
	map1 := make(map[int]int)
	for i, v := range nums {
		fmt.Println(map1[v])
		if map1[v] > 0 {
			return map1[v], i
		}
		map1[target-v] = i
	}
	return 0, 0
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	fmt.Println(twosum(nums, target))
}
