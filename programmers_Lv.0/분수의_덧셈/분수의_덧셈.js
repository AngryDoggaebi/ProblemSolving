//분자 분모 구하고 최대공약수로 
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let resultNumer = ((denom2*numer1)+(denom1*numer2));
    let resultDenom = (denom1*denom2);
    let GCD = 0;
    for(let i=0; i<=Math.min(resultNumer, resultDenom); i++){
        if(resultNumer%i===0 && resultDenom%i===0){
            GCD=i;
        }
    }
    answer.push(resultNumer / GCD);
    answer.push(resultDenom / GCD);
    return answer;
}
