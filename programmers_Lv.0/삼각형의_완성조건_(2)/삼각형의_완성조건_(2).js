function solution(sides) {
    const longer = Math.max(sides[0], sides[1]);
    const shorter = Math.min(sides[0], sides[1]);
    let arr = [];
    let x = 0;
    
    //longest가 가장 긴 변일 경우
    for(let i = longer-shorter+1; i<=longer; i++){
        arr.push(i);
    }
    //미지의 수 x가 가장 긴 변일 경우
    for(let i = longer+1; i<longer+shorter; i++){
        arr.push(i);
    }
    return arr.length;
}
