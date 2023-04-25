function solution(i, j, k) {
    let cnt = 0;
    for(i; i<=j; i++){
        let arr = i.toString().split("").filter(x => x === k.toString())
        cnt += arr.length;
    }
    return cnt
}
