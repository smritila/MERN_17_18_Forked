// declare a function with a return type

/* 
    syntax : function func_name(parameter_list): return_type {
        function body
    }
*/
function add(a: number, b: number): number {
  let r = a + b;
  return r;
}

let result = add(15, 13);
console.log(result);

// arrow function with return type

/* 
    syntax :
    let var_name = (parameter_list): return_type => {
        function body
    }
*/
let sum = (a, b): number => {
  return a + b;
};

let result2 = sum(12, 14);
console.log(result2);

// anonymous function with return type
/* 
    syntax : function(parameter_list): return_type {
        function body
    }
*/

let anonymous = function (a, b): number {
  return a + b;
};

let ann = anonymous(12, 12);
console.log(ann);
