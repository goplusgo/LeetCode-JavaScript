/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.add(num);
  this.minHeap.add(this.maxHeap.poll());
  if (this.minHeap.size > this.maxHeap.size) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size === 0 && this.maxHeap.size === 0) {
    return null;
  }

  if (this.minHeap.size == this.maxHeap.size) {
    let left = this.minHeap.peek();
    let right = this.maxHeap.peek();
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  }
  return this.maxHeap.peek();
};

/**
 * The heap implementation is borrowed from https://leetcode.com/problems/find-median-from-data-stream/discuss/587391/Intuitive-JavaScript-Solution-with-Heaps
 */

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
  constructor() {
    this.size = 0;
    this.heap = [];
  }
  /**
   * Swap two given nodes
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  /**
   * Find parent index
   */
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  /**
   * Find left child index
   */
  left(i) {
    return 2 * i + 1;
  }
  /**
   * Find right child index
   */
  right(i) {
    return 2 * i + 2;
  }
}

class MinHeap extends Heap {
  /**
   * Insert new node with given value into the Min Heap. The node bubbles up
   * until it is at the correct position.
   */
  add(v) {
    this.heap.push(v);
    this.size = this.heap.length;

    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
  /**
   * Look up the top of the heap.
   */
  peek() {
    return this.heap[0] || null;
  }
  /**
   * Find the correct position for the node with given index.
   */
  heapify(i) {
    const left = this.left(i);
    const right = this.right(i);
    let smallestIndex = i;

    if (left < this.size && this.heap[left] < this.heap[smallestIndex]) {
      smallestIndex = left;
    }
    if (right < this.size && this.heap[right] < this.heap[smallestIndex]) {
      smallestIndex = right;
    }
    if (smallestIndex !== i) {
      this.swap(i, smallestIndex);
      this.heapify(smallestIndex);
    }
  }
  /**
   * Remove the top of the heap.
   */
  poll() {
    const min = this.heap[0];

    if (this.size > 1) {
      this.heap[0] = this.heap.pop();
      this.heapify(0);
    } else {
      this.heap.pop();
    }

    this.size = this.heap.length;

    return min;
  }
}

class MaxHeap extends Heap {
  add(v) {
    this.heap.push(v);
    this.size = this.heap.length;

    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  peek() {
    return this.heap[0] || null;
  }

  heapify(i) {
    const left = this.left(i);
    const right = this.right(i);
    let largestIndex = i;

    if (left < this.size && this.heap[left] > this.heap[largestIndex]) {
      largestIndex = left;
    }
    if (right < this.size && this.heap[right] > this.heap[largestIndex]) {
      largestIndex = right;
    }
    if (largestIndex !== i) {
      this.swap(i, largestIndex);
      this.heapify(largestIndex);
    }
  }

  poll() {
    const max = this.heap[0];

    if (this.size > 1) {
      this.heap[0] = this.heap.pop();
      this.heapify(0);
    } else {
      this.heap.pop();
    }
    this.size = this.heap.length;

    return max;
  }
}
