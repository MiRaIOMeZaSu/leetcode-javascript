/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    var ret = new Array();
    var div = 2;
    var level = 1;
    while (div - 1 < label) {
        div *= 2;
        level++;
    }
    ret.unshift(label);
    var rest = 0;
    var temp = 0;
    while (div > 2) {
        if (level % 2 == 0) {
            temp = div / 2;
            rest = temp - (label - div / 2 + 1) + 1;
            label = div / 2 - 1 - (temp / 2 - Math.ceil(rest / 2));
        } else {
            temp = div / 2;
            rest = temp - (label - temp + 1) + 1;
            label = temp / 2 - 1 + Math.ceil(rest / 2);
        }
        ret.unshift(label);
        level--;
        div /= 2;
        6
    }
    return ret;
};

pathInZigZagTree(26);