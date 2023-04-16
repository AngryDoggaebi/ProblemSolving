function solution(box, n) {
    if(box.length===0)return 1
    return Math.floor(box.shift()/n) * solution(box, n)
}
