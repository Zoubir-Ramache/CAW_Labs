// before
var arr = [3, 5, 8];
var plus_one = arr.map(function (n) {
  return n + 1;
});

//after
let arr = [3, 5, 8];
let plus_one = arr.map((n) => n + 1);

//before

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
//after

const double = (arr) => arr.map((val) => val * 2);

//before
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
var a = obj.numbers.a;
var b = obj.numbers.b;

//after

let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
let {a , b}=obj.numbers


//before 
function add(a,b){
  if(a === 0) a = 0
  else {
  a = a || 10
  }
  if(b === 0) b = 0
  else {
  b = b || 10
  }
  return a+b
  }


//  after
const add =(a , b)=> {
  a=(a===0)? 0:a||10
  b=(b===0) ? 0:b||10
  return a+b
}