const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortSpeciesByTeeth(arr) {
newArr = arr.sort(function (a, b) {
    return a.numTeeth - b.numTeeth;
  });
  return newArr;
};

console.log(sortSpeciesByTeeth(speciesArray));
/* Output: [ { speciesName: 'human', numTeeth: 32 },
{ speciesName: 'dog', numTeeth: 42 },
{ speciesName: 'shark', numTeeth: 50 },
{ speciesName: 'alligator', numTeeth: 80 } ] */

--------------------------------
/*
Explanation of the sort method:
Within the comparison function, the a.numTeeth - b.numTeeth expression is used as the basis for sorting. This expression subtracts the numTeeth value of object b from the numTeeth value of object a. The result determines the order of the objects in the sorted array.

If the result is a negative value, a is considered smaller than b, and a will appear before b in the sorted array.
If the result is a positive value, a is considered larger than b, and a will appear after b in the sorted array.
If the result is zero, a and b are considered equal in terms of teeth count, and their relative order is preserved.
*/
