function CheckKabisatYear(year) {
   if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      return "ini tahun kabisat";
   } else {
      return "ini bukan tahun kabisat"
   }
};

console.log(CheckKabisatYear(2024));