'use strict';

const add = (n, acc = 0) => {
  if (n === 0) return acc;
  return add(n - 1, acc + n);
};

console.log(add(3));

const tail = (n, acc = 0) => {
  while (true) {
    if (n === 0) return acc;
    acc += n; // 3 + 2 + 1
    n -= 1;   // 2, 1, 0
  }
};

console.log(tail(3));
