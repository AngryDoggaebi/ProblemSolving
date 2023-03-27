function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //map으로 length가 담긴 배열을 새로 만들어 sort해 
  //가장 짧은 길이(arr[0])와 가장 긴 길이(arr[arr.length-1]) 구한 후
  //lastIndexOf()로 newArr에서 짧, 긴 마지막 인덱스 찾고,
  //for 문 돌면서 해당 인덱스 빼고 나머지 result에 push, return

  let newArr = arr.map(x => x.length);
  let newArr2 = arr.map(x => x.length).sort((a, b) => a-b);
  let result = [];

  let shortest = newArr.lastIndexOf(newArr2[0]);
  let longest = newArr.lastIndexOf(newArr2[newArr2.length-1]); 

  for(let i=0; i<arr.length; i++){
    if(shortest !== i && longest !== i){
      result.push(arr[i]);
    }
  }
  
  return result;

}
