const CheckMaxNum = (number) => {
   let firstNumber = number[0];
   for (let index = 1; index < number.length; index++) {
      if (number[index] > firstNumber) {
         firstNumber = number[index];
      }
   }
   return firstNumber;
}

console.log(CheckMaxNum([22, 14, 17]));