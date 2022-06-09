/**
 * https://leetcode.com/problems/majority-element-ii/
 * 
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]

Constraints:
1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109

Follow up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	let n1;
	let n2;
	let c1 = 0;
	let c2 = 0;

	for (let i = 0; i < nums.length; i += 1) {
		if (n1 === nums[i]) {
			c1 += 1;
		} else if (n2 === nums[i]) {
			c2 += 1;
		} else if (c1 === 0) {
			n1 = nums[i];
			c1 += 1;
		} else if (c2 === 0) {
			n2 = nums[i];
			c2 += 1;
		} else {
			c1 -= 1;
			c2 -= 1;
		}
	}
	c1 = 0;
	c2 = 0;
	const answer = [];
	for (let i = 0; i < nums.length; i += 1) {
		if (n1 === nums[i]) {
			c1 += 1;
		} else if (n2 === nums[i]) {
			c2 += 1;
		}
	}
	const minRepeat = Math.floor(nums.length / 3);
	if (c1 > minRepeat) {
		answer.push(n1);
	}
	if (c2 > minRepeat) {
		answer.push(n2);
	}

	return answer;
};
