const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return Boolean(this.find(data))
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // const node = this.rootNode
    // if(data < node.data) {
    //   return node.find(data, node.left);
    // } else {
    //   return node.find(data, node.right);
    // }

  return findWithin(this.rootNode, data);

  function findWithin (node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data){
      return node;
    }
    if (data < node.data) {
      return findWithin(node.left, data)
    } else {
      return findWithin(node.right, data)
    }
  }
}
  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode =removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right
          return node
        }
        if(!node.right) {
          node = node.left
          return node
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }
        node.data =minRight.data
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode){
      return;
    }
    let node = this.rootNode;
    while (node.left){
      node=node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode){
      return;
    }
    let node = this.rootNode;
    while (node.right){
      node=node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};