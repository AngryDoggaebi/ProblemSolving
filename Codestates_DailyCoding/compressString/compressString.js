function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let alphabet = str[0];
  let n = 0;
  let arr=[];
  //마지막 문자 비교를 위해 빈 문자 하나 추가
  str = str + ' ';
  for(let i=0; i<str.length; i++){
    if(alphabet === str[i]){
      n++;
    } 
    else {
      if(n>=3){
        arr.push(n);
        arr.push(alphabet);
      } else {
        for(let i=0; i<n; i++){
          arr.push(alphabet);
        }
      }
      n=1;
      alphabet=str[i];
    }
  }
  return arr.join("")  
}
