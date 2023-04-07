function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  
  // 아스키코드를 사용해 알파벳이 들어있는 arr배열을 만든다
  const arr = Array(26).fill().map((v, i)=>{return String.fromCharCode(i+97)});
  let result = [];
  
  for(let i=0; i<str.length; i++){
    //str[i]가 있는 arr의 인덱스를 찾는아서 secret만큼 빼준다
    let indexOfArrCha = arr.indexOf(str[i])-secret;

    // 1. 공백을 찾아서 처리해준다
    if(str[i] === ' ') result.push(' ');
    // 2. 찾은 arr의 인덱스가 마이너스일 경우 arr.length만큼 더한 값을 result에 push한다(n+(-n)은 -)
    else if(indexOfArrCha < 0) result.push(arr[arr.length+indexOfArrCha]);
    // 3. if에 걸리지 않은 나머지는 바로 result에 push한다
    else result.push(arr[indexOfArrCha]);
  }
  //result를 join("")하여 리턴한다
  return result.join("")
}
