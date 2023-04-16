function solution(n) {
    //n의 배수이면서 6의 배수인 최소공배수를 다시 6으로 나누기
    //n의 배수이면서 6의 배수 = n으로 나누어 떨어지고 6으로 나누어 떨어지는 수
    let i = Math.max(n, 6);
    while(true){
        if(i%n===0 && i%6===0)break;
        i++;
    }
    return i/6
}
