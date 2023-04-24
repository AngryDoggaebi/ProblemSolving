let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  //점화식(x=(x-1)+(x-2))
  // 1 -> 1
  // 2 -> 2
  // 3 -> 3
  // 4 -> 5
  // 5 -> 8

  let arr = [0, 1, 2]
  
  if(arr[n] !== undefined){
    return arr[n]
  } else {
    while(true){
      if(arr.length-1 === n){
        return arr[n]
      }
      arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
  }
  
};
