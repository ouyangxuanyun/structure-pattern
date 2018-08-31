(function (exports) {
    'use strict';

    function comparator(a, b) {
        return a - b;
    }

    var heapSort = (function () {

        /**
         * Finds the correct place of given element in given max heap.
         *
         * @private
         * @param {Array} array Array.
         * @param {Number} index Index of the element which palce in
         * the max heap should be found.
         * @param {Number} heapSize Size of the heap.
         * @param {function} cmp Comparison function.
         */
        function heapify(array, index, heapSize, cmp) {
            var left = 2 * index + 1;
            var right = 2 * index + 2;
            var largest = index;

            if (left < heapSize && cmp(array[left], array[index]) > 0) {
                largest = left;
            }

            if (right < heapSize && cmp(array[right], array[largest]) > 0) {
                largest = right;
            }

            if (largest !== index) {
                var temp = array[index];
                array[index] = array[largest];
                array[largest] = temp;
                heapify(array, largest, heapSize, cmp);
            }
        }

        /**
         * Builds max heap from given array.
         * 从最后一个拥有子节点的节点开始(array.length / 2)，将该节点连同其子节点进行比较，
           将最大的数与该节点交换后，再依次向前节点(i--)进行相同交换处理，
           直至构建出大顶堆（升序为大顶，降序为小顶）
         * @private
         * @param {Array} array Array which should be turned into max heap.
         * @param {function} cmp Comparison function.
         * @return {Array} array Array turned into max heap.
         */
        function buildMaxHeap(array, cmp) {
            for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
                heapify(array, i, array.length, cmp);
            }
            return array;
        }

        /**
         * Heapsort. Turns the input array into max
         * heap and after that sorts it.<br><br>
         * Time complexity: O(N log N).
         *
         * @example
         *
         * var sort = require('path-to-algorithms/src' +
         * '/sorting/heapsort').heapSort;
         * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
         *
         * @public
         * @module sorting/heapsort
         * @param {Array} array Input array.
         * @param {Function} cmp Optional. A function that defines an
         * alternative sort order. The function should return a negative,
         * zero, or positive value, depending on the arguments.
         * @return {Array} Sorted array.
         *
         * 排序步骤：
         * 1 构造大顶堆（或者小顶堆）  buildMaxHeap(array, cmp)
         * 2 第一个元素就是最大的，然后跟最后一个元素交换，把最大的弹出栈（下面代码是放到数组最后，然后再生成新的堆（不包含放到最后的这个最大值））
         * 3 第一个元素与它的左右子节点比较，左右子节点中较大的比它大则交换 然后再递归地这样交换下去直到没有比它大的子节点或者没有子节点。
         *  如此循环往复 直到建堆数组长度变成0
         *
         * 要点：堆是特别的二叉树，堆分为大根堆和小根堆，是完全二叉树。大根堆的要求是每个节点的值都不大于其父节点的值，即A[PARENT[i]] >= A[i]。
         *
         * 堆排序要先构造堆（大顶堆或者小顶堆），然后取出堆顶元素（最大值或者最小值），把剩下的元素再建堆，然后再取出堆顶元素直到所有元素都取出
         * 按照先后取出元素的顺序得到排序
         *
         * 主函数，构造堆，调整堆函数
         */
        return function (array, cmp) {
            cmp = cmp || comparator;
            var size = array.length;
            var temp;
            buildMaxHeap(array, cmp);  // 构建堆

          console.log('***', array)

          for (var i = array.length - 1; i > 0; i -= 1) {
                temp = array[0];
                array[0] = array[i];
                array[i] = temp;
                size -= 1;
                heapify(array, 0, size, cmp);
            }
            return array;
        };
    }());

    exports.heapSort = heapSort;

})(typeof window === 'undefined' ? module.exports : window);
