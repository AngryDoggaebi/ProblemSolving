function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  let money = 100;
  let year = 0;

  while(money < 200){
    money = money + (money*(interestRate/100));
    year++;
  }
  return year;
}
