var numIslands = function(grid) {
    if (grid == null) return 0;

    let count = 0;
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

let steps = [[0, -1], [-1, 0], [0, 1], [1, 0]];

var dfs = function(grid, row, col) {
    grid[row][col] = '0';

    for (let i = 0; i < steps.length; ++i) {
            let r = row + steps[i][0];
            let c = col + steps[i][1];

            if (r < 0 || r === grid.length || c < 0 || c === grid[0].length || grid[r][c] === '0') continue;
            dfs(grid, r, c);
    }
}
