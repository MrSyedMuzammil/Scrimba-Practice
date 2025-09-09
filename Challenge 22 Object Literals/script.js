// function addressMaker(address) {
//   const newAddress = {
//     city: address.city,
//     state: address.state,
//     country: "Pakistan",
//   };
// }

// addressMaker({ city: "Peshawar", state: "KPK" });

// Refactor Code to use Object Destructuring and Template Literals

function addressMaker({ city, state }) {
  const newAddress = {
    city,
    state,
    country: "Pakistan",
  };

  console.log(`This is the city: ${city}`);
  console.log(`This is the state: ${state}`);
  console.log("This is the country: Pakistan");
}

addressMaker({ city: "Peshawar", state: "KPK" });
