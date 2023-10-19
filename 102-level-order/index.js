"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function levelOrder(root) {
    if (!root)
        return [];
    var levels = {};
    setLevels(root, 1, levels);
    var result = [];
    for (var _i = 0, _a = Object.values(levels); _i < _a.length; _i++) {
        var iterator = _a[_i];
        result.push(iterator);
    }
    return result;
}
function setLevels(node, currLv, levels) {
    if (!node)
        return;
    if (!levels[currLv])
        levels[currLv] = [node.val];
    else
        levels[currLv].push(node.val);
    setLevels(node.left, currLv + 1, levels);
    setLevels(node.right, currLv + 1, levels);
}
var value = {
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};
console.log(levelOrder(value));
