// function hello(callback) {
//   console.log('hello ' + callback());
// }

// function getName(){
//   return 'Code Mafia';
// }

// hello(getName);

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b){
  return a * b
}

function plus(a, b){
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, plus);