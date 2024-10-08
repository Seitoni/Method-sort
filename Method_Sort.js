var mas = [43, 54, 43, 14, 87, 46, 67];

function compareNumbers (num1, num2) {
  if (num1 > num2) {
    return 1;
  }
  else if (num1 === num2) {
    return 0;
  }
  else {
    return -1;
  }
}

function compareNumbersDesc (num1, num2) {
  if (num2 > num1) {
    return 1;
  }
  else if (num1 === num2) {
    return 0;
  }
  else {
    return -1;
  }
}

mas.sort (compareNumbersDesc);
console.log (mas);

