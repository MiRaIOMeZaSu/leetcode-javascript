 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 /**
  * Definition for a binary tree node.
  * function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
 var solve = function (node) {
     var list = Array();
     if (node == null) {
         return Array();
     }
     list.push(node.val);
     list.push(solve(node.left));
     list.push(solve(node.right));
     return list;
 }
 /**
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function (root) {
     var list = solve(root);
     return JSON.stringify(list);
 };

 var deSolve = function (list) {
     if (list.length == 0) {
         return null;
     }
     var node = new TreeNode(list[0]);
     node.left = deSolve(list[1]);
     node.right = deSolve(list[2]);
     return node;
 };

 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function (data) {
     var list = JSON.parse(data);
     return deSolve(list);
 };

 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */

 _1 = TreeNode(1);
 _2 = TreeNode(2);
 _3 = TreeNode(3);
 _1.left = _2;
 _1.right = _3;
 _4 = TreeNode(4);
 _5 = TreeNode(5);
 _3.left = _4;
 _3.right = _5;

 deserialize(serialize(_1))