function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  //바빌로니아 방법 (근사값을 찾으며 수식 계속 반복)
  //소수점 둘째자리 (toFixed(2)), toFixed는 0.1을 제대로 표현할 수 없어 string 반환.
  
  let x = 1;
  while(x**2 !== num){
    if(Number((x**2).toFixed(2))===num){
      return Number(x.toFixed(2));
    }
    x = (x+num/x)/2;
  }

  return Number(x.toFixed(2));
  
}
