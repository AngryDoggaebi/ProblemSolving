function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length-2; i++){
      //i와 겹치는걸 피하기 위해 i+1부터 시작, index의 -1에서 끝
        for(let j=i+1; j<number.length-1; j++){
          //j와 겹치는걸 피하기 위해 j+1부터 시작, index의 -2에서 끝
          //결과적으로 i,j,k 모두 겹치지 않음
            for(let k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k] === 0){
                    answer++;
                }
            }
        }
    }
    return answer;
}
