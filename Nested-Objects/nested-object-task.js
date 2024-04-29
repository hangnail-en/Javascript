const spaceship = {
  passengers:
    {
    names: ["Sandra", "Vagabond"],          // Assigned an array as a key value, one of which will be accessed later
    totalCount: 2,
    },
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship.crew.captain['favorite foods'][0];          // Accesses the spaceship variable > the "crew" object > the "captain" nested object > the "favorite foods" object > first value in the array
console.log(capFave);

let firstPassenger = spaceship.passengers.names[0];                 // Accesses the spaceship variable > the "passengers" object > the "names" nested object (not in a bracket since there are no spaces in the  >
console.log(firstPassenger);
