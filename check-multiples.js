const CheckMultiple = (number) => {
   if (number % 3 == 0) {
      return "ini adalah kelipatan 3"
   } else if (number % 5 == 0) {
      return "ini adalah kelipatan 5"
   } else {
      return "ini bukan kelipatan 3 dan 5"
   } 
}

console.log(CheckMultiple(7));