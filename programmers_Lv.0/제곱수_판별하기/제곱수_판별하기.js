function solution(n) {
    
    let divisor = 0;
    //약수의 개수
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            divisor++;
        }
    }
    //약수의 개수가 홀수면 제곱수(약수 중 자기 자신과 곱해지는 녀석이 있으므로)
    return divisor%2===1 ? 1 : 2 ;
}
