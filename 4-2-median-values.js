/*
given 2 sorted arrays
find the median value of the 2 arrays
*/

function findMedian(arr1, arr2) {
    // determine the middle index(es)
    let totalLength = arr1.length + arr2.length;
    let middle = Math.floor(totalLength / 2);

    // stitch together until middle index
    let count = 0;

    while (count < middle) {
        if (arr1[0] <= arr2[0]) {
            arr1.shift();
        } else {
            arr2.shift();
        }
        count++;
    }

    // return the median
    if (totalLength % 2 === 0) {
        let medians = [];

        while (medians.length < 2) {
            if (arr1[0] <= arr2[0]) {
                medians.push(arr1.shift());
            } else {
                medians.push(arr2.shift());
            }
        }

        return (medians[0] + medians[1]) / 2;
    } else {
        return arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift();
    }
}

console.log(findMedian([1,5,16,20], [2,3,4,7]));