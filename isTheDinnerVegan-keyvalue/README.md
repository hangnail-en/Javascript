# isTheDinnerVegan-keyvalue
Practice accessing key value pairs and returning a boolean based on a values presence or absence

1. Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
```
{name: 'cabbage', source: 'plant' }
```
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
```
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
```
