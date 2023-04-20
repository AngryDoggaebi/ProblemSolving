function solution(my_string) {
    let arr = Array(10).fill().map((v, i)=> i)
   
    return my_string.split("")
        .filter(v => arr.includes(Number(v)))
        .map(v => Number(v))
        .reduce((acc, cur)=>acc+cur,0)
}
