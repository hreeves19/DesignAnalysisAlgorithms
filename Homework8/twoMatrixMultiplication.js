let input1 = [
    [1, 2],
    [-2, 5],
    [-5, 6]
];

let input2 = [
    [3],
    [2]
];

console.log(multipleMatrices(input1, input2));

// Court Reeves
// 10/26/2019
function getColumnNumber(matrix) {
    return matrix[0].length; // Assuming matrix is a valid matrix that is filled
}

function getRowNumber(matrix) {
    return matrix.length;
}

function multipleMatrices(matrixA, matrixB) {
    // Verify that we can multiple these matrices
    if(getColumnNumber(matrixA) !== getRowNumber(matrixB)) {
        console.log("These matrices cannot be multipled together, the number of columns of matrix A is not the same as the number of rows in matrix B.");
        return;
    }

    // Initializing matrixC T(n)=O(n)
    let matrixC = new Array(getRowNumber(matrixA));
    for(let i = 0; i < getRowNumber(matrixA); i++) {
        matrixC[i] = new Array(getColumnNumber(matrixB));
    }
    
    // T(n)=O(n^3)
    for(let i = 0; i < getRowNumber(matrixA); i++) {
        for(let y = 0; y < getColumnNumber(matrixC); y++) {
            let sum = 0;
            for(let x = 0; x < getRowNumber(matrixB); x++) {
                sum += matrixA[i][x] * matrixB[x][y];
            }
            matrixC[i][y] = sum;
        }
    }

    return matrixC;
}
