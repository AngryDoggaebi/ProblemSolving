function solution(dots) {
    
    //기울기 = y값 증가량 / x값 증가량
    let check0a_1b = Math.abs(dots[0][1]-dots[1][1]) / Math.abs(dots[0][0]-dots[1][0]);
    let check0a_2c = Math.abs(dots[0][1]-dots[2][1]) / Math.abs(dots[0][0]-dots[2][0]);
    let check0a_3d = Math.abs(dots[0][1]-dots[3][1]) / Math.abs(dots[0][0]-dots[3][0]);
    
    let check1b_2c = Math.abs(dots[1][1]-dots[2][1]) / Math.abs(dots[1][0]-dots[2][0]);
    let check1b_3d = Math.abs(dots[1][1]-dots[3][1]) / Math.abs(dots[1][0]-dots[3][0]);
    
    let check2c_3d = Math.abs(dots[2][1]-dots[3][1]) / Math.abs(dots[2][0]-dots[3][0]);
    
    //[a-b, c-d],[a-c, b-d],[a-d, b-c]
    const inclination = [check0a_1b === check2c_3d, check0a_2c === check1b_3d, check0a_3d === check1b_2c]
    
    for(let i=0; i<inclination.length; i++){
        if (inclination[i] === true) return 1;
    }
    
    return 0;

}
