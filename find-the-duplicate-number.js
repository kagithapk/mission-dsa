/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Constraints:
1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n

All the integers in nums appear only once except for precisely one integer which appears two or more times.

Follow up:
How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	//define
	let rabbit = 0;
	let tortoise = 0;
	let round1 = true;
	let round2 = false;

	//detect
	while (round1) {
		if (nums[tortoise] === nums[rabbit] && round2) {
			tortoise = 0;
			round1 = false;
		} else {
			tortoise = nums[tortoise];
			rabbit = nums[nums[rabbit]];
			round2 = true;
		}
	}

	//locate
	while (round2) {
		if (nums[tortoise] === nums[rabbit]) return nums[tortoise];
		tortoise = nums[tortoise];
		rabbit = nums[rabbit];
	}
};
