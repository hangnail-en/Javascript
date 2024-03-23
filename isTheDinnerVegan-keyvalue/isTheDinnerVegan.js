const isTheDinnerVegan = arr => {
  for (i = 0; i < arr.length; i++) {
  if (arr[i].source === 'plant') { // Checks if every source contains 'plant', if not, prints false to alert the user that part of the meal is not vegan
    return true;
  } else {
    return false;
    };
  };
};

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner)) // Output: false
