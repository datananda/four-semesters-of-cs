/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

function mergeSort(nums) {
    if (nums.length === 1) return nums;

    let length = nums.length;
    let middle = Math.floor(length / 2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle, length);

    return stitch(mergeSort(left), mergeSort(right));
}

function stitch(arr1, arr2) {
    let sortedArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.splice(0, 1)[0]);
        } else {
            sortedArr.push(arr2.splice(0, 1)[0]);
        }
    }

    return sortedArr.concat(arr1).concat(arr2);
}


console.log(mergeSort([10,5,3,8,2,6,4,7,9,1]));

// // unit tests
// // do not modify the below code
// describe('insertion sort', function() {
//   it('should sort correctly', () => {
//     var nums = [10,5,3,8,2,6,4,7,9,1];
//     var ans = mergeSort(nums);
//     expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
//   });
// });