const ReverseWord = (string) => {
   let toArray = string.split('');
   let ReverseWord = toArray.reverse();
   ReverseWord = ReverseWord.join('');
   return ReverseWord;
}

console.log(ReverseWord("hello"));