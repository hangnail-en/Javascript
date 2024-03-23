const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline); // Directly passed politelyDecline in rather than using an argument function
};

const acceptEverything = arr => {
  arr.forEach(veg => console.log(`Ok, I guess I will eat some ${veg}.`));
}

declineEverything(veggies);
/* Output: No broccoli please. I will have pizza with extra cheese.
No spinach please. I will have pizza with extra cheese.
No cauliflower please. I will have pizza with extra cheese.
No broccoflower please. I will have pizza with extra cheese. */

acceptEverything(veggies);
/* Output: Ok, I guess I will eat some broccoli.
Ok, I guess I will eat some spinach.
Ok, I guess I will eat some cauliflower.
Ok, I guess I will eat some broccoflower. */
