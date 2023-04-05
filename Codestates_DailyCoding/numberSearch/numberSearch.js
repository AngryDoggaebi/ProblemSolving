function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  //replace()와 정규식으로 문자와 숫자 따로 분리. (but 둘 다 문자열)
  //for문으로 숫자로 이루어진 문자열을 number 타입으로 바꿈과 동시에 nOfN에 누적
  //nOfS는 문자로 이루어진 문자열의 길이
  //str의 길이가 0이면 0 리턴, 아니면 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴

  let nOfN = 0;
  let nOfS = 0;
  const stringOfStr = str.replace(/[0-9\s]/g, ''); //숫자와 공백을 ''로 바꿔 문자만 남게
  const numberOfStr = str.replace(/[^0-9]/g, ''); //숫자 아닌 것을 ''로 바꿔 숫자만 남게
  
  for(let i=0; i<numberOfStr.length; i++){
    nOfN += Number(numberOfStr[i]);
  }
  
  nOfS = stringOfStr.length;

  return str.length === 0 ? 0 : Math.round(nOfN/nOfS)

}
