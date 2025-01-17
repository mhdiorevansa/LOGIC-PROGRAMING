function checkNumber (number) {
   if (number > 0) {
      return "ini angka positif"
   }
   else if (number < 0) {
      return "ini angka negatif"
   } else {
      return "ini angka nol";
   }
}
console.log(checkNumber(0));