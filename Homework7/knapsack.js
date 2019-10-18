// A dynamic programming implementation of the knapsack problem
const inputValue = [60, 100, 120];
const inputWeight = [10, 20, 30];
const sack = 50;
algorithm(inputValue, inputWeight, sack);

function max(num1, num2) {
    return (num1 > num2)? num1 : num2;
}

function algorithm(itemValues, weights, knapsack) {
    let solutions = new Array(itemValues.length + 1).fill(new Array(knapsack + 1));
    console.log(solutions);

    for(let i = 0; i <= itemValues.length; i++) {
        for(let x = 0; x <= knapsack; x++) {
            if(i == 0 || x == 0) {
                solutions[i][x] = 0;
            } else if(weights[i - 1] <= x) {
                solutions[i][x] = Math.max(itemValues[i - 1] + solutions[i - 1][x - weights[i - 1]], solutions[i - 1][x]);
            } else {
                solutions[i][x] = solutions[i - 1][x];
            }
        }
    }

    console.log(solutions[itemValues.length][knapsack]);
}