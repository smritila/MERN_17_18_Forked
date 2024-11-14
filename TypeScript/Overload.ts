// function overloading
function add(a: number, b: number);

function add(a: string, b: string);

function add(a: number, b: string);

// provide the implementation function

function add(a: any, b: any) {
  return a + b;
}

let sum = add(100, 200);
console.log(sum);

sum = add("100", "200");
console.log(sum);
