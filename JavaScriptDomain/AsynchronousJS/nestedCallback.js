function add(a, b, callback1) {
  setTimeout(() => {
    let r = a + b;
    callback1(r);
  }, 1000);
}

function sub(addResult, b, callback2) {
  setTimeout(() => {
    let r = addResult - b;
    callback2(r);
  }, 1000);
}

function mult(subResult, b, callback3) {
  setTimeout(() => {
    let r = subResult * b;
    callback3(r);
  }, 1000);
}

add(15, 10, (addResult) => {
  sub(addResult, 5, (subResult) => {
    mult(subResult, 2, (multResult) => {
      console.log("Final Result = " + multResult);
    });
  });
});
