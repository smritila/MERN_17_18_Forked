let arr = [];
function storeData() {
  let firstName = 
  document.getElementById("firstName").value;
  let lastName = 
  document.getElementById("lastName").value;
  let obj = {
    firstName: firstName,
    lastName: lastName,
  };
  console.log(obj);
  arr.push(obj);
  console.log(arr);
  event.preventDefault();
}
