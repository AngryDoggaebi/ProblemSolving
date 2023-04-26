function solution(score) {
    const arr = score.map(v => (v[0]+v[1])/2);
    const sorted = [...arr].sort((a, b) => b-a)
    return arr.map(v => sorted.indexOf(v)+1)
}
