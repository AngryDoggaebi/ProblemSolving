function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  //toLowerCase로 str 대소문자 통일, split("")으로 배열에 담기
  //new Set()으로 중복 제거
  //new Set과 대소문자 통일한 배열 길이 비교, 같으면 true, 다르면 false
  

  let newStr = str.toLowerCase().split("");
  let strCollection = new Set(newStr);
  if(newStr.length === strCollection.size) return true;
  else return false;
  
}
