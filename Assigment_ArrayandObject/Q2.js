const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let maxAge = Math.max.apply(null, ages);
let minAge = Math.min.apply(null, ages);
console.log(maxAge, minAge());

function findMedian(arr) {
  arr.sort((a, b) => a - b);

  const len = arr.length;

  if (len % 2 !== 0) {
    return arr[Math.floor(len / 2)];
  } else {
    const middle1 = arr[len / 2 - 1];
    const middle2 = arr[len / 2];
    return (middle1 + middle2) / 2;
  }
}
// console.log("Median:", findMedian(ages));

function averageOfStudent(arr) {
  let len = arr.length;
  let sum = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum / len;
}
let average = averageOfStudent(ages);
// Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log("Range:", range);
// Compare the value of (min - average) and (max - average), use abs() method"

const diffMin = Math.abs(minAge - average);
const diffMax = Math.abs(maxAge - average);
console.log(diffMax, diffMax);
