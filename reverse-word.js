const ReverseWord = (string) => {
   let toArray = string.split('');
   toArray.reverse();
   let value = toArray.join('');
   return value;
}

console.log(ReverseWord("hello"));