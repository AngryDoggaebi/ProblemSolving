function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.

  //피보나치 저장할 배열
  let arr = [0, 1];

  //memoization
  function fibMemo(num){
    //arr에 값이 있으면 리턴
    if(arr[num] !== undefined){
      return arr[num]
    //arr에 값이 없으면 피보나치 계산헤서 arr[num]에 넣고 리턴
    //(다음에 같은 값 들어왔을 때 바로 뽑아낼 수 있게)
    } else {
      return arr[num] = fibMemo(num - 1) + fibMemo(num - 2) 
    }
  }
  //값이 들어오면 fibMemo로 보내기
  return fibMemo(n)
}
