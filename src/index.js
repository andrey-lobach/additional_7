module.exports = function solveSudoku(matrix) {
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix.length; col++){
            if (matrix[row][col] == 0) {
                for(let num = 1; num <= 9; num++){
                    if (check(matrix,num,row,col)){
                        matrix[row][col] = num;
                        if (solveSudoku(matrix)) return matrix;
                        matrix[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;


    function check(matrix, num, row, col) {
        for (let i = 0; i < matrix.length; i++)
            if (matrix[row][i] == num || matrix[i][col] == num) return false;
        for(let i = row - row%3; i < row - row%3 + 3; i++)
            for(let j = col - col%3; j < col - col%3 + 3; j++)
                if (matrix[i][j] == num) return false;

        return true;
    }
}