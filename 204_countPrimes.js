/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3) {
        return 0;
    }
    var already = [2];
    // 此题技巧: 对于每个数x要判断是否是质数,从2到sqrt(x)即可
    for (var i = 3; i < n; i++) {
        if (isprime(i, already)) {
            already.push(i);
        }
    }
    return already.length;
};

var isprime = function (n, already) {
    var i = 0;
    while (already[i] * already[i] <= n && i < already.length) {
        if (n % already[i] == 0) {
            return false;
        }
        i++;
    }
    return true;
};
console.log(countPrimes(10))