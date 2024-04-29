// Write your code below

const tinasFollowers = ['Beth', 'Cat', 'Carl'];               // Outer loop array
const bobsFollowers = ['Beth', 'Cat', 'Tiffany', 'Paul'];     // Inner loop array
const mutualFollowers = [];                                   // Empty array that will be filled with matching followers

for (let i = 0; i < bobsFollowers.length; i++) {              // Outer loop
  for (let j = 0; j < tinasFollowers.length; j++) {           // Inner loop
    if (bobsFollowers[i] === tinasFollowers[j]) {             // Compare array entries to find matches
      mutualFollowers.push(bobsFollowers[i]);                 // Appends matching mutuals to the mutualFollowers empty array
    };
  };
};

console.log(mutualFollowers.join(', '));                      // Remove array brackets and logs each entry with a comma and space to separate them
