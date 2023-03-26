function solution(num, total) {
    //-1000부터 1000까지 배열 만들어서
    //for문을 돌면서 i부터 i+num-1까지 잘라
    //더했을 때 값이 total과 같은지 확인 후 리턴
    //아니면 i++해서 다시 실행
    
    var answer = [];
    let arr = [];
    for(let i = -1000; i <= -1; i++){
        arr.push(i);
    }
    arr.push(...Array(1000).fill().map((x,i)=>{return i})); 
    
    let n = 0;
    for(let i=0; i<arr.length; i++){
        answer = arr.slice(i, i+num);
        if(answer.reduce((acc, cur)=>{return acc+cur},0) === total){
            return answer;
        } 
    } 
}
