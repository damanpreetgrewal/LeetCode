/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = (nums1, nums2) =>
  nums1.filter(item => {
    if (nums2.includes(item))
      return nums2.splice(nums2.indexOf(item), 1) || true;
  });

console.log(intersect([1, 2, 2, 1], [2, 2]));
//output [2,2]
