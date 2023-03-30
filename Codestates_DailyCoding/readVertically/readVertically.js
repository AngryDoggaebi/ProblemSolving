function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // for문으로 배열의 요소 중 가장 긴 문자열의 길이를 찾아 변수 longest에 담고, 
  // 이중for문을 도는데 i는 longest만큼, j는 arr.length만큼 돈다.
  // 예를들어
  // ['ㅁㅁㅁㅁㅁ',
  // 'ㅁㅁㅁ',
  // 'ㅁㅁㅁ']
  // 일 때 세로로 다섯 줄 가로로 각각의 철자는 3개씩(+가장 긴 줄의 남는 철자)이니까.
  // 변수 result에 push 후 join해서 출력

  let result = [];
  let longest = 0;
  for(let i=0; i<arr.length; i++){
    if(longest < arr[i].length) longest = arr[i].length;
  }

  for(let i=0; i<longest; i++){
    for(let j=0; j<arr.length; j++){
      result.push(arr[j][i]);
    }
  }
  return result.join("");

}
