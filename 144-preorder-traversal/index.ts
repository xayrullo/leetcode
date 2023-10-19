class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
}
const value: TreeNode = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};
console.log(preorderTraversal(value));
