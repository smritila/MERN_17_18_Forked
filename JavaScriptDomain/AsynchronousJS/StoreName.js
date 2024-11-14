let userName;

function assignName(input, callback) {
  setTimeout(() => {
    userName = input;
    callback();
  }, 1000);
}

function printName() {
  document.write(userName);
}
assignName("Santhosh", printName);
