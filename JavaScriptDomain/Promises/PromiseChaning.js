function Richie(request) {
  let response;
  return new Promise((resolve, reject) => {
    console.log("Give richie 2 days time to solve your request");
    let sum = 0;
    for (let item of request) {
      sum = sum + item.price;
    }
    if (sum <= 1500) {
      resolve(sum);
      response = "Richie can afford it";
      console.log(response);
    } else {
      reject("Sorry, richie can't afford that");
    }
  });
}

function shopKeeper(items) {
  setTimeout(() => {
    console.log("I have the required items, ", items);
  }, 1000);
}

let itemsRequired = [
  { Name: "Dog", price: 200 },
  { Name: "TV", price: 500 },
  { Name: "Sofa", price: 500 },
];
let you = Richie(itemsRequired);

you
  .then((money) => {
    console.log("Richie gave me the money to purchase ", money);
  })
  .then(shopKeeper(itemsRequired));

//   promise chaining :
// one promise function being called 
// after the resolution of the previous promise
