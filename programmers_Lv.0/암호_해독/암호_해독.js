function solution(cipher, code) {
    var answer = "";
    var arr = [];
    var n=code;
    
    arr = cipher.split("");
    for(let i=0; i<cipher.length; i++){
        if(i === n-1){
            answer += arr[i];
            n += code;
        }
    }

    return answer;
}
