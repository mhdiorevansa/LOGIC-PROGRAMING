const CountDigit = (number) => {
   let value = 0
   let toString = number.toString();
   let toArray = toString.split('');
   for (let index = 0; index < toArray.length; index++ ) {
      value += parseInt(toArray[index]);
   }
   return value;
}

console.log(CountDigit(1234));