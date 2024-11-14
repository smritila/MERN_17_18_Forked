let users;
function fetchData(cb) {
  let p = document.createElement("p");
  p.innerText = "Data Fetch Start...";
  document.body.appendChild(p);
  setTimeout(() => {
    users = [
      { name: "Sachin", username: "sachin_10" },
      { name: "Dhoni", username: "dhoni_7" },
      { name: "Virat", username: "virat_18" },
      { name: "Ab de Villiers", username: "ab_17" },
      { name: "Ponting", username: "ponting_33" },
      { name: "Gilchrist", username: "Gilchrist_00" },
    ];
    cb(users);
    p = document.createElement("p");
    p.innerText = "Data Fetch End...";
    document.body.appendChild(p);
  }, 2000);
}

function printData(users) {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Name";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "User Name";
  tr.appendChild(th);
  table.appendChild(tr);
  document.body.appendChild(table);
  for (let item of users) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.innerHTML = item.name;
    row.appendChild(nameCell);
    let userNameCell = document.createElement("td");
    userNameCell.innerHTML = item.username;
    row.appendChild(userNameCell);
    table.appendChild(row);
  }
  console.log(users);
}

fetchData(printData);
