/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  let n = mergedArr.length;
  let median = Math.ceil(n / 2);
  if (n % 2 == 0) {
    let evenMed = (mergedArr[median] + mergedArr[median - 1]) / 2;
    return evenMed;
  } else {
    return mergedArr[median - 1];
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
