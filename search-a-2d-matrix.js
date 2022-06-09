/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let f = 0;
	let l = matrix.length - 1;
	let m;
	let rowToCheck = 0;
	let valueOfM;

	while (f <= l) {
		m = Math.floor((f + l) / 2);
		valueOfM = matrix[m][0];
		if (target < valueOfM) {
			l = m - 1;
		} else if (target === valueOfM) {
			return true;
		} else {
			rowToCheck = m;
			f = m + 1;
		}
	}

	f = 0;
	l = matrix[0].length - 1;

	while (f <= l) {
		m = Math.floor((f + l) / 2);
		valueOfM = matrix[rowToCheck][m];
		if (target < valueOfM) {
			l = m - 1;
		} else if (target === valueOfM) {
			return true;
		} else {
			f = m + 1;
		}
	}

	return false;
};
