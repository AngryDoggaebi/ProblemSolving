function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let n=arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i] <= n){
      return false
    }
    n+=arr[i];
  }
  return true
}
