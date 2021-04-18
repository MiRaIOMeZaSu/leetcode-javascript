/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    // 对每个点,其大小等于左上和上面的最大值减一
    // 输入矩阵非正方形
    dp = new Array();
    for (var i = 0; i < matrix.length; i++) {
        dp.push(new Array(matrix[0].length).fill(0));
    }
    var ret = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == "1") {
                var size = 1;
                if (i - 1 >= 0) {
                    size = Math.max(size, matrix[i - 1][j] - 1);
                }
                if (j - 1 >= 0) {
                    size = Math.max(size, matrix[i][j - 1] - 1);
                }
                var temp = findSquare(matrix, i, j, size);
                while (temp != size) {
                    size = temp;
                    temp = findSquare(matrix, i, j, size);
                }
                dp[i][j] = size;
                ret = Math.max(ret, size);
            }
        }
    }
    return ret * ret;
};

var findSquare = function (matrix, i, j, size) {
    // 寻找size + 1范围是否全是1
    // 最后返回的是size或size + 1
    if (j + size >= matrix[0].length || i + size >= matrix.length) {
        return size;
    }
    for (var y = i; y <= i + size; y++) {
        if (matrix[y][j + size] != "1") {
            return size;
        }
    }
    for (var x = j; x <= j + size; x++) {
        if (matrix[i + size][x] != "1") {
            return size;
        }
    }
    return size + 1;
};

var ret = maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]);
console.log(ret);