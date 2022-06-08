/**
 * https://leetcode.com/problems/merge-intervals/
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const resultArray = [];
	let min = intervals[0][0];
	let max = intervals[0][1];
	for (let i = 0; i < intervals.length - 1; i += 1) {
		if (max < intervals[i + 1][0]) {
			resultArray.push([min, max]);
			min = intervals[i + 1][0];
			max = intervals[i + 1][1];
		}
		if (min > intervals[i + 1][0]) {
			min = intervals[i + 1][0];
		}
		if (max < intervals[i + 1][1]) {
			max = intervals[i + 1][1];
		}
	}

	resultArray.push([min, max]);

	return resultArray;
};
