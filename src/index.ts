/**
 * Performs a breadth-first-search on a node and its children
 * @param curNode Current node in the queue
 * @param condition The condition the node has to match
 * @param queue The current queue
 */
const bfsDom = (
    curNode: Node,
    condition: (node: Node) => boolean,
    queue: Node[] = []
): Node | null => {
    if (condition(curNode)) {
        return curNode;
    }

    queue = queue.concat([].slice.apply(curNode.childNodes));

    const nextNode = queue.shift();
    if (!!nextNode) {
        return bfsDom(nextNode, condition, queue);
    }

    return null;
};

/**
 * Performs a breadth-first-search on a Node and its children until one of them matches the provided condition
 * @param node Initial starting node
 * @param condition The condition that the node needs to match to be returned
 */
export default (node: Node, condition: (node: Node) => boolean): Node | null =>
    bfsDom(node, condition);
