const CheckEventOdd = (number) => {
   if (number % 2 == 0) {
      return "ini adalah genap";
   } else {
      return "ini adalah ganjil"
   }
}

console.log(CheckEventOdd(11));