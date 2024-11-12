function fn(a, b, ...args) {
  console.log("a : ", a);
  console.log("b : ", b);
  console.log("the rest of arguments : ", args);
}
console.log("fn(1, 2, 3, A, B, C)  : ");

fn(1, 2, 3, "A", "B", "C");
console.log("fn(1, 2)  : ");
fn(1, 2);
console.log(" x : ");

let x = ["a", "b", "c", "d"];
fn(...x);
