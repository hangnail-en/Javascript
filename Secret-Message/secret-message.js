let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // Step 1
secretMessage.push('to', 'Program'); // Step 2

/*
console.log(secretMessage.indexOf(''));
Used to locate the index for use in Step 4 and 7 by inputting the string
*/

secretMessage[7] = 'right' // Step 4
secretMessage.shift(); // Step 5
secretMessage.unshift('Programming'); // Step 6
secretMessage.splice(6, 5, 'know'); // Step 7 - Starts at index 6 and removes 5 elements to be replaced by the string passed as the third argument

console.log(secretMessage.join(' ')); // Step 8 - The value passed as a string will be used between each array element
