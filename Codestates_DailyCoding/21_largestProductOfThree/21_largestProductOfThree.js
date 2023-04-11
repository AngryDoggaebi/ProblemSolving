const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = arr.sort((a,b)=>{return b-a})
  let pos = 0;
  let neg = 0;
  for(let i=0; i<newArr.length; i++){
    if (newArr[i]>=0) pos++;
    else neg++;
  }
  //양수 2개 이상 음수 2개 이상
  if(pos>=2 && neg>=2){
    let a = newArr[0] * newArr[newArr.length-1] * newArr[newArr.length-2];
    let b = newArr[0] * newArr[1] * newArr[2];
    return Math.max(a, b)
  } 
  //양수 2개 이상 음수 2개 미만 또는 양수 0개
  else if(pos>=2 && neg<2 || pos === 0){
    return newArr[0] * newArr[1] * newArr[2]
  } 
  //양수 1개
  else if(pos===1){
    return newArr[0] * newArr[newArr.length-1] * newArr[newArr.length-2]
  }
};
