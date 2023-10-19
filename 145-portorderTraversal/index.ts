import TreeNode from "../classes";
function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
}
const value: TreeNode = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};

console.log(postorderTraversal(value))