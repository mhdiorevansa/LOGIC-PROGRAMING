// bilangan yang habis membagi bilangan ke n
const FactorNumber = (n) => {
   let array = [];
   for (let index = 0; index <= n; index++) {
      if (n % index == 0) {
         array.push(index);
      }
   }
   return array;
}

console.log(FactorNumber(12));