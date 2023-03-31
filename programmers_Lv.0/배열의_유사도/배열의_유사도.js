function solution(s1, s2) {
    //이중for문 i는 s1, j는 s2 돌면서
    //if문으로 s2에 s1이 있을 때마다 n++
    
    let n = 0;
    for(let i=0; i<s1.length; i++){
        for(let j=0; j<s2.length; j++){
            if(s1[i] === s2[j]) n++;
        }
    }
    return n
}
