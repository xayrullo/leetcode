import TreeNode from "../classes";
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const levels = {} as { [key: number]: number[] };
  setLevels(root, 1, levels);
  const result = [];
  for (const iterator of Object.values(levels)) {
    result.push(iterator)
  }
  return result
}
function setLevels(
  node: TreeNode | null,
  currLv: number,
  levels: { [key: number]: number[] }
): void {
  if (!node) return;
  if (!levels[currLv]) levels[currLv] = [node.val];
  else levels[currLv].push(node.val);
  setLevels(node.left, currLv + 1, levels);
  setLevels(node.right, currLv + 1, levels);
}
const value: TreeNode = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};

console.log(levelOrder(value));
