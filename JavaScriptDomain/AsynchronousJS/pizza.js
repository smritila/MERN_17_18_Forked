function OrderPizza() {
  let pizza = "Margeretta";
  console.log(pizza, " pizza ordered successfully");
  console.log("pizza takes 30 mins to deliver");
  setTimeout(() => {
    for (let i = 0; i <= 10000; i++) {}
    console.log("pizza delivered");
  }, 1000);
}

function callFriend() {
  console.log("calling friend");
  console.log("friend takes 30 mins");
  for (let i = 0; i <= 10000; i++) {}
  console.log("Friend reached");
}

OrderPizza();
callFriend();
