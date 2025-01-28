const Ascending = (number) => {
   let sort = number.sort((a,b) => a - b);
   // jika descending maka ururtkan secara ascending baru reverse
   // let reverse = sort.reverse();
   return sort;
}

console.log(Ascending([3, 6, 4, 1, 5, 9]))