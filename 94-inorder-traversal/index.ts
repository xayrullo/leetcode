import TreeNode from "../classes";

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
}
const value: TreeNode = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};

console.log(inorderTraversal(value))