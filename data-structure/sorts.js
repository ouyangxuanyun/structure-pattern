const _items = Symbol("items");
class ArraySorts {
    constructor() {
        this[_items] = [];
    }

    size() {
        return this[_items].length;
    }

    toString() {
        return this[_items].join();
    }

    insert() {
        this[_items].push(...arguments);
    }

    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    /**
     * 快速排序(特点之一是原地排序，非原地排序见http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
     * 方法图解详见 https://www.cnblogs.com/MOBIN/p/4681369.html
     * 把快速排序联想成东拆西补或西拆东补，一边拆一边补，直到所有元素达到有序状态
     * O(nlogn) ~ O(n^2)
     */
    quickSort() {
        this[_items] = this.quickSortHelper(this[_items], 0, this[_items].length - 1);
    }

    quickSortHelper(arr, left, right) {
        let leftIndex = left;
        let rightIndex = right;
        let temp = 0;
        if (leftIndex <= rightIndex) {
            temp = arr[leftIndex];
            while (leftIndex != rightIndex) {
                while (leftIndex < rightIndex && arr[rightIndex] >= temp) {
                    rightIndex--;
                }
                arr[leftIndex] = arr[rightIndex];
                while (leftIndex < rightIndex && arr[leftIndex] <= temp) {
                    leftIndex++;
                }
                arr[rightIndex] = arr[leftIndex];
            }
            arr[rightIndex] = temp;
            this.quickSortHelper(arr, left, leftIndex - 1);
            this.quickSortHelper(arr, rightIndex + 1, right);
        }
        return arr;
    }

    /**
     * 归并排序（合并排序）是一个递归算法,先进行划分，然后再进行合并
     */
    mergeSort() {
        this[_items] = this.mergeSortHelper(this[_items]);
    }

    mergeSortHelper(array) {
        const len = array.length;
        if (len == 1) {
            return array;
        }
        const mid = Math.floor(len / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid, len);
        return this.merge(this.mergeSortHelper(left), this.mergeSortHelper(right));

    }

    merge(left, right) {
        const result = [];
        let il = 0, ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[il++]);
            }
        }
        while (il < left.length) {
            result.push(left[il++]);
        }
        while (ir < left.length) {
            result.push(right[ir++]);
        }
        return result;
    }

    /**
     * 冒泡排序 O(n^2)
     */
    bubbleSort() {
        for (let i = 0; i < this.size(); i++) {
            for (let j = i + 1; j < this.size(); j++) {
                if (this[_items][i] > this[_items][j]) this.swap(this[_items], i, j);
            }
        }
    }

    /**
     * O((n^2)/2 )
     * 更多冒泡排序优化见 http://blog.csdn.net/qq_25827845/article/details/50654467
     */
    betterBubbleSort() {
        for (let i = 0; i < this.size(); i++) {
            for (let j = this.size() - 1; j > i; j--) {
                if (this[_items][i] > this[_items][j]) this.swap(this[_items], i, j);
            }
        }
    }

    /**
     * 选择排序 每次循环找出最值，循环结束后将最值调整到合适位置，交换的次数少。 O((n^2)/2 )
     */
    selectSort() {
        let indexMin;
        for (let i = 0; i < this.size() - 1; i++) {
            indexMin = i;
            for (let j = i + 1; j < this.size(); j++) {
                if (this[_items][j] < this[_items][indexMin]) indexMin = j;
            }
            if (i != indexMin) this.swap(this[_items], i, indexMin);
        }
    }

    /**
     * 插入排序 假定第一个已经排好序 接着就和第二项比较 第二项大的话不变 小的话就插入到第一项之前
     */
    insertionSort() {
        let i, j, temp;
        for (i = 1; i < this.size(); i++) {
            j = i;
            temp = this[_items][i];
            while (j > 0 && this[_items][j - 1] > temp) {
                this[_items][j] = this[_items][j - 1];
                j--;
            }
            this[_items][j] = temp;
        }
    }
}

module.exports = ArraySorts;