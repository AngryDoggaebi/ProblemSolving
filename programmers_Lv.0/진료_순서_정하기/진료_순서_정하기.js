function solution(emergency) {
    let e = [...emergency]
    for(let i=1; i<=e.length; i++){
        let max = Math.max(...e)
        e.splice(e.indexOf(max), 1, -i);
    }
    return e.map(v => v * -1)
}
