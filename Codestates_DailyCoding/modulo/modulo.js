function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  //if num2가 0이라면 'Error: cannot divide by zero' 리턴
  //while문을 돌면서 num2가 num1이 되기 직전까지 곱한 후
  //(while이 원하는 횟수보다 한 번 더 실행되므로 if(num2 * i > num1)로 실행 여부 미리 확인)
  //num1에서 num2 빼면 그 값이 나머지.
  
  let n = 0;
  let i = 0;

  if(num2 === 0) return 'Error: cannot divide by zero';

  while(n <= num1){
    if(n === num1){
      return 0;
    } else if(num2 * i > num1){
      break;
    }
    n = num2 * i;
    i++;
  }

  return num1 - n;
}
