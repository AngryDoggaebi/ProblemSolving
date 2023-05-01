function solution(dots) {
    let x = 0;
    let y = 0;
    for(let i=1; i<dots.length; i++){
        if(dots[1][0] !== dots[i][0]){
            x = Math.abs(dots[1][0] - dots[i][0])
            
        }
        if(dots[1][1] !== dots[i][1]){
            y = Math.abs(dots[1][1] - dots[i][1])
        }
    }
    return x * y
}
