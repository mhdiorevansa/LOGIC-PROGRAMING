const FactorNumber = (n) => {
   let array = [];
   for (let index = 1; index <= n; index++) {
      if (n % index == 0) {
         array.push(index);
      }
   }
   return array;
}

console.log(FactorNumber(12));