/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // 使用colorfill相关思想
    var y = board.length;
    var x = board[0].length;
    for (var i = 0; i < y; i++) {
        // 竖向
        if (board[i][0] == "O") {
            fill(board, [0, i]);
        }
        if (board[i][x - 1] == "O") {
            fill(board, [x - 1, i])
        }
    }
    for (var i = 0; i < x; i++) {
        // 横向
        if (board[0][i] == "O") {
            fill(board, [i, 0])
        }
        if (board[y - 1][i] == "O") {
            fill(board, [i, y - 1])
        }
    }
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X";
            } else if (board[i][j] == "S") {
                board[i][j] = "O";
            }
        }
    }
    return board;
};
var fill = function (board, pos) {
    if (!inArea(pos, board[0].length, board.length)) {
        return;
    }
    if (board[pos[1]][pos[0]] != "O" || board[pos[1]][pos[0]] == "S") {
        return;
    }
    board[pos[1]][pos[0]] = "S";
    fill(board, [pos[0], pos[1] - 1])
    fill(board, [pos[0], pos[1] + 1])
    fill(board, [pos[0] - 1, pos[1]])
    fill(board, [pos[0] + 1, pos[1]])
};
var inArea = function (pos, x, y) {
    if (pos[0] >= x || pos[0] < 0) {
        return false;
    }
    if (pos[1] >= y || pos[1] < 0) {
        return false;
    }
    return true;
}

var board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
];
console.log(solve(board));