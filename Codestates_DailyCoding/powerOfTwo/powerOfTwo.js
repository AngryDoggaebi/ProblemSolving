function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  let answer=2;
  
  if(num === 1){
    return true;
  } 
  else {
    while(num > answer){
      answer*=2;
    }
  }
  
  return num === answer;
}
