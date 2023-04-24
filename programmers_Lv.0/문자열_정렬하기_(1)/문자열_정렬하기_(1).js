function solution(my_string) {
    let isNum = /[0-9]/g;
    let arr = my_string
        .split("")
        .filter( v => v==='0' || +v )
        .map(v => Number(v))
        .sort((a,b) => a-b)
    return arr
}
