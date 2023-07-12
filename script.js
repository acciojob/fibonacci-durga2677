
function fibonacci(num) {
  if (num <= 0) {
    return "Invalid input. Please enter a positive integer greater than zero.";
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

