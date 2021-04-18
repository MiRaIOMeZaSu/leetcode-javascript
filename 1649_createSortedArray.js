/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function (instructions) {
    // 每次都是二分查找(贪心)
    if (instructions.length <= 2) {
        return 0;
    }
    var ret = 0;
    var arr = [instructions[0]];
    if (instructions[1] > instructions[0]) {
        arr.push(instructions[1]);
    } else {
        arr.unshift(instructions[1]);
    }
    for (var i = 2; i < instructions.length; i++) {
        // 此时开始二分
        var left = 0;
        var right = arr.length - 1;
        var mid = left + Math.floor((right - left) / 2);
        while (left + 1 < right) {
            mid = left + Math.floor((right - left) / 2);
            if (instructions[i] > arr[mid]) {
                left = mid;
            } else if (instructions[i] < arr[mid]) {
                right = mid;
            } else {
                // 此时相等
                var temp = mid;
                while (temp >= 0 && arr[temp] == instructions[i]) {
                    temp--;
                }
                var l = temp + 1;
                temp = mid;
                while (temp <= arr.length - 1 && arr[temp] == instructions[i]) {
                    temp++;
                }
                var index;
                if (l < arr.length - 1 - temp) {
                    index = l;
                } else {
                    index = temp;
                }
                arr.splice(index, 0, instructions[i]);
                ret += Math.min(index, arr.length - 1 - index);
                break;
            }
        }
        if (arr.length <= i) {
            var index;
            if (instructions[i] <= arr[left]) {
                index = left;
            } else if (instructions[i] >= arr[right]) {
                index = right + 1;
            } else {
                index = right;
            }
            arr.splice(index, 0, instructions[i]);
            ret += Math.min(index, arr.length - 1 - index);
        }

    }
    return ret;
};

createSortedArray([3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]);