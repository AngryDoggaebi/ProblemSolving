function ABCheck(str) {
  // code goes here
  //문자열 소문자로 변경
  //for문으로 문자열 중에서 a 가 있으면서 
  //그 곳에서부터 4인덱스 떨어진 곳의 문자가 b 인 경우 확인
  //if 반대의 경우 확인
  str2 = str.toLowerCase();
  for(let i=0; i<str2.length; i++){
    if(str2[i]==='a' && str2[i+4]==='b'){
      return true;
    }
    else if(str2[i]==='b' && str2[i+4]==='a'){
      return true;
    }
  }
  return false;
}
