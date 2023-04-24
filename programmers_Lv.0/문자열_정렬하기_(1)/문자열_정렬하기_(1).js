function solution(my_string) {
    return my_string
        .split("")
        .filter( v => v==='0' || +v )
        .map(v => Number(v))
        .sort((a,b) => a-b)
}
