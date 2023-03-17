function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  if(str.length === 0) return '';
  str = str.split(' ');
  let answer ='';
  for (let i=0; i<str.length; i++){
    answer += str[i][0];
  }
  return answer;
}
