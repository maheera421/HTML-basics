
/*var num1 = 5;
var num2 = 10;

var sum = num1 + num2;

console.log("The sum is: " + sum);

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);



let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  console.log(complexArray)
  console.log(complexArray[1][1].c);*/

// push and unshift to add the values at end and start of array respectively

const stack = [];

function pushToStack(item) {
  stack.push(item);
}

function popFromStack() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
    return undefined;
  }
  return stack.pop();
}


pushToStack(1);
pushToStack(2);
pushToStack(3);

console.log("Stack:", stack);

const poppedItem = popFromStack();
console.log("Popped item:", poppedItem);
console.log("Stack after popping:", stack);
