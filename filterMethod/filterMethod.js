const justCoolStuff = (arr1, arr2) => {
  let arr3 = []; // Empty string
  arr1.filter((word) => { 
    if (arr2.includes(word)) { // Finds which words are present in both arrays and pushes to the new empty array
        arr3.push(word);
    }
});
  return arr3;
};

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff)) // Output: [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
