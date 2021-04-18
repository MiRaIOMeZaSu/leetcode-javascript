/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    // visit + colorfill
    // 先检查边缘,在往中间找即可
    var m = grid.length;
    var n = grid[0].length;
    visit = []
    for (var i = 0; i < m; i++) {
        visit.push(new Array(n).fill(false))
    }
    var count = 0;
    for (var i = 0; i < m; i++) {
        if (!visit[i][0] && grid[i][0] == 1) {
            colorFill(visit, i, 0, grid);
        }
        visit[i][0] = true;
        if (!visit[i][n - 1] && grid[i][n - 1] == 1) {
            colorFill(visit, i, n - 1, grid);
        }
        visit[i][n - 1] = true;
    }
    for (var i = 0; i < n; i++) {
        if (!visit[0][i] && grid[0][i] == 1) {
            colorFill(visit, 0, i, grid);
        }
        visit[0][i] = true;
        if (!visit[m - 1][i] && grid[m - 1][i] == 1) {
            colorFill(visit, m - 1, i, grid);
        }
        visit[m - 1][i] = true;
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (!visit[i][j]) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
    }
    return count;
};
var colorFill = function (visit, i, j, grid) {
    var arr = [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
    ];
    var temp;
    for (var x = 0; x < 4; x++) {
        temp = arr[x];
        if (temp[0] < 0 || temp[0] >= visit.length || temp[1] < 0 || temp[1] >= visit[0].length) {
            continue;
        }
        if (visit[temp[0]][temp[1]]) {
            continue;
        }
        if (grid[temp[0]][temp[1]] == 1) {
            visit[temp[0]][temp[1]] = true;
            colorFill(visit, temp[0], temp[1], grid);
        }
    }
};

console.log(numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
]));