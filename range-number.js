const RangeNumber = (n) => {
   let sum = 0
   for (let index = 1; index <= n; index++) {
      sum += index;
   }
   return sum;
}

console.log(RangeNumber(12));