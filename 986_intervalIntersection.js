/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var isJoint = function (_array) {
    _array.sort(function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] == b[0]) {
            if (a[1] > b[1]) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return -1;
        }
    });
    if (_array[0][0] == _array[1][0]) {
        return _array[1];
    }
    if (_array[0][1] >= _array[1][0]) {
        return [_array[1][0], Math.min(_array[0][1], _array[1][1])];
    }
    return [-1, -1];
};
var intervalIntersection = function (firstList, secondList) {
    var result = [];
    var i = 0;
    var j = 0;
    var firstSize = firstList.length;
    var secondSize = secondList.length;
    if (firstSize == 0 || secondSize == 0) {
        return [];
    }
    // var now = firstList[0];
    // var next = secondList[0];
    // var flag = 0;
    var first = firstList[0];
    var second = secondList[0];
    while (j < secondSize || i < firstSize) {
        while (i < firstSize && first[1] <= second[1]) {
            // 此时secondList的后端在后
            var zone = isJoint([first, second])
            if (zone[0] != -1) {
                // 有交集
                result.push(zone);
            }
            i++;
            if (i < firstSize) {
                first = firstList[i];
            }
        }
        while (j < secondSize && first[1] > second[1]) {
            // 此时firstList的后端在后
            var zone = isJoint([first, second])
            if (zone[0] != -1) {
                // 有交集
                result.push(zone);
            }
            j++;
            if (j < secondSize) {
                second = secondList[j];
            }
        }
        if ((i == firstSize && first[1] <= second[1]) || (j == secondSize && first[1] > second[1])) {
            break;
        }
    }
    return result;
};
console.log(intervalIntersection([
        [3, 5],
        [9, 20]
    ],
    [
        [4, 5],
        [7, 10],
        [11, 12],
        [14, 15],
        [16, 20]
    ]));