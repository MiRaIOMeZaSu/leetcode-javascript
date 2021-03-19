var UF = function (elements) {
    // 小写字母
    this.map = [];
    this.sizeMap = [];
    for (var i = 0; i < 26; i++) {
        this.map.push(i);
        this.sizeMap.push(1);
    }
}
UF.prototype.union = function (a, b) {
    if (this.map[a.charCodeAt() - 97] != this.map[b.charCodeAt() - 97]) {
        // 进行连接操作
        // TODO: 树的大小比较
        var root_a = this.find(a);
        var root_b = this.find(b);
        if (this.sizeMap[root_a] > this.sizeMap[root_b]) {
            this.map[root_b] = root_a;
        } else {
            this.map[root_a] = root_b;
        }
    }
}
UF.prototype.find = function (a) {
    // 寻找真正的根(在数组中找到的是父节点,真正的根其索引等于值)
    index = a.charCodeAt() - 97;
    var temp;
    while (this.map[this.map[index]] != this.map[index]) {
        temp = this.map[index];
        this.map[index] = this.map[this.map[index]];
        index = temp;
    }
    return this.map[index];
}
UF.prototype.compare = function (a, b) {
    return this.find(a) == this.find(b);
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    var uf = new UF()
    var Non_equal = [];
    equations.forEach(element => {
        if (element[1] == "!") {
            Non_equal.push(element);
        } else {
            uf.union(element[0], element[3]);
        }
    });
    for (var i = 0; i < Non_equal.length; i++) {
        if (uf.compare(Non_equal[i][0], Non_equal[i][3])) {
            return false;
        }
    }
    return true;
};
console.log(equationsPossible(["a==b", "b!=a"]));