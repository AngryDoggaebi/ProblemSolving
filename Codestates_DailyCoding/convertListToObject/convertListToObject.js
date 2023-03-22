function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //새로운 객체 생성
  //for문을 돌면서 각 2차배열에 접근
  //if문으로 빈 배열 만나면 continue (빈 배열 이후에 값 있는 배열이 올 수도 있으므로 return X)
  //중복되는 키의 경우 초기값 사용. hasOwnProperty로 확인 및 continue
  //arr[i][0]을 객체의 key, arr[i][1]을 value로 집어넣기

  let obj={};
  for(let i=0; i<arr.length; i++){
    let key = arr[i][0];
    let val = arr[i][1];

    if(arr[i].length === 0 || obj.hasOwnProperty(key)) continue;
    obj[key] = val;
  }
  return obj;
}
