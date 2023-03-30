function solution(n) {
    //n을 문자열로 바꾼 후 (toString), 각각 배열로 넣고(split), reduce 안에서 각각의 요소를 number로 바꾼 후 값 
    return n.toString().split("").reduce((acc, cur)=>{return Number(acc)+Number(cur)},0)
    
}
