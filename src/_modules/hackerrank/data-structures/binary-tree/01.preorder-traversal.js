/*
Input:
Node is defined as

struct node
{
    int data;
    node* left;
    node* right;
};


Output: space separated string of node values
3 5 1 4 2 6


Thoughts:
Parent should be saved, or simply accessed


Algo:

get root value
save root?

go to left node
  -> collect value
  -> is `leaf`
    ? go to right tree
    : recursive `go deeper` (how?)


recur end criteria: deepest right


if no parent - it is root: do the same for right subTree

*/

export function preOrder(node, results = []) {
  const {left, right, data} = node
  results.push(data)
  if (left) {
    results.push(left.value)
    preOrder(left, results)
  }
  if (right) {
    results.push(right.value)
    preOrder(right, results)
  }
  return results
}

export function format(input = []) {
  return input.join(' ')
}