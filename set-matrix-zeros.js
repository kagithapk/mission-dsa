/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * Example 1:
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 * Example 2:
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let isInitialNonZero = true;
    
    for(let i = 0; i < m; i += 1) {
        if (matrix[i][0] ===  0) isInitialNonZero = false;
        for(let j = 1; j < n; j += 1) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    for(let i = m - 1; i >= 0; i -= 1) {
        for(let j = n - 1; j >= 1; j -= 1) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (!isInitialNonZero) matrix[i][0] = 0;
    }
};
