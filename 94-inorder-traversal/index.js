"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function inorderTraversal(root) {
    if (!root)
        return [];
    return __spreadArray(__spreadArray(__spreadArray([], inorderTraversal(root.left), true), [root.val], false), inorderTraversal(root.right), true);
}
var value = {
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};
console.log(inorderTraversal(value));
