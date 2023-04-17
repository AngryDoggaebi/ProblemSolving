const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let arr2 = [...arr];
  let num = arr2.length;

  for(let i=0; i<arr2.length; i++){
    let cnt = 0;
    num = num-1;
    for(let j=0; j<num; j++){
      if(arr2[j] > arr2[j+1]){
        let a = arr2[j];
        arr2.splice(j,1,arr2[j+1]);
        arr2.splice(j+1,1,a);
        cnt++;
      }
    }
    if(cnt === 0){
      return arr2
    }
  }

  return arr2
};
