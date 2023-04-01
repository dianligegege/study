/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let i = 1; val = 0;

    for (let node = this.head; node !== null; node = node.next) {
        if (Math.floor(Math.random() * i) === 0) {
            val = node.val;
        }
        ++i;
    }

    return val;
};