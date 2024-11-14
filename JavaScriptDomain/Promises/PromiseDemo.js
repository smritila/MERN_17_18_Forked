function Richie(request) {
  let response;
  return new Promise((resolve, reject) => {
    console.log("Give richie 2 days time to solve your request");
    setTimeout(() => {
      let sum = 0;
      for (let item of request) {
        sum = sum + item.price;
      }
      if (sum <= 1000) {
        resolve(request);
        response = "Richie can afford it";
        console.log(response);
      } else {
        reject("Sorry, richie can't afford that");
      }
    }, 2000);
  });
}

let you = Richie([
  { Name: "Dog", price: 200 },
  { Name: "TV", price: 500 },
  { Name: "Sofa", price: 500 },
]);
you
  .then(() => {
    console.log("Request was successful");
  })
  .catch(() => {
    console.log("Request was unsuccessful");
  });

// a promise object
// has three states pending, fullfiled and rejected
// i will resolve it only if the price is <1000

// once the promise is resolved or rejected, it
// has to be handled using then() and chatch() blocks.
// then() for success and catch() for failure which
// also handles errors
