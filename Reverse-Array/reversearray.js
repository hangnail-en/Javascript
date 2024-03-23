const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  };
  return newArr;
};

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); // Output: ['This', 'will', 'all', 'make', 'sense.'];

/*
Could be easily done by using the .reverse method instead:

const reverseArray = (arr) => {
  return arr.reverse();
};

*/
