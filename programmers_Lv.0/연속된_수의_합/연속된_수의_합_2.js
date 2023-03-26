function solution(num, total) {
    //num이 짝수인지 홀수인지 구분해
    //홀수의 경우 total/num으로 result의 가운데 수 확인 후 
    //num/2의 내림만큼 빼 result 의 첫 수 확인 및 num만큼 1씩 더한 배열로 만들어 리턴
    //짝수의 경우 total/num의 올림으로 result의 절반+1인덱스의 수 확인 후
    //num/2를 빼 result의 첫 수 확인, num만큼 1씩 더한 배열로 리턴
    
    let a = 0;
    
    if(num%2 ===1){
        a = total/num - Math.floor(num/2);
    } else {
        a = Math.ceil(total/num) - num/2;
    }
    
    return Array(num).fill().map((x, i)=>{return i+a});
    
}
