const Ascending = (number) => {
   return number.sort((a,b) => a - b);
}

console.log(Ascending([3, 6, 4, 1, 5, 9]))