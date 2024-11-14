function Add(a, b, callSub) {
  setTimeout(() => {
    let r = a + b;
    console.log(r);
    callSub(r, 4);
  }, 1000);
}

function sub(addResult, b) {
  let r = addResult - b;
  console.log(r);
}

Add(15, 25, sub);

// create a function which fetches an array of objects asynchronously and handle them using callbacks

let data;
function fetchData(callPrint) {
  setTimeout(() => {
    data = [
      { name: "Sachin", userName: "sachin_10" },
      { name: "Dhoni", userName: "Dhoni_07" },
      { name: "Virat", userName: "Virat_18" },
      { name: "AbDe Villiers", userName: "Abde17" },
      { name: "Ponting", userName: "Ponting_033" },
    ];
    callPrint();
  }, 1000);
}

fetchData(() => {
  console.log(data);
});
