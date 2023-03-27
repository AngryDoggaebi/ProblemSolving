function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let strArr = str.split("");

  for(let i=0; i<strArr.length; i++){
    if(strArr[i]%2 === 1 && strArr[i+1]%2 === 1){
      strArr.splice(i+1,0,'-');
      i++;
    }
  }
  
  return strArr.join("");
  
}
