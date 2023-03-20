function firstReverse(str) {
// TODO: 여기에 코드를 작성합니다.
let newStr = '';
for(let i=str.length-1; i>=0; i--){
  newStr += str[i];
}
return newStr;
}

// reference:
// function firstReverse(str) {
//   return str.split('').reverse().join('');
// }
