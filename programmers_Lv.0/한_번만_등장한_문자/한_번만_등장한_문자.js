function solution(s) {
    //이중for문 돌면서 s[i]랑 s[j]랑 같을 때 마다 n을 하나씩 올림
    //두 번째 for문 돌고 난 후의 n의 개수가 1개일 경우에만 배열 answer에 push
    //sort로 정렬 후 join으로 합쳐서 리턴
    
    var answer = [];
    
    for(let i=0; i<s.length; i++){
        let n=0;
        for(let j=0; j<s.length; j++){
            if(s[i]===s[j]) n++;
        }
        if(n===1) answer.push(s[i])
    }
    
    return answer.sort().join("");
}
