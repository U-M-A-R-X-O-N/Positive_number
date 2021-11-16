var numbers = [123, -45, -34.4, 74.5, 23, -14.6, 93.04, -4.63, 3.456];
var result = [];

function intNumber(lorem) {
  for (var number of lorem) {
    if (number < 0) {
      result.push(Math.round(number) * -1);
    } else {
      result.push(Math.round(number));
    }
  }
  return result;
}

console.log(intNumber(numbers));
alert(intNumber(numbers));


