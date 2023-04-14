function solution(polynomial) {
    let newPoly = polynomial.split(' + ');
    let xNum = 0;
    let num = 0;
    let result = '';
    
    for(let i=0; i<newPoly.length; i++){
        //xNum
        if(newPoly[i].includes('x')){
            if(newPoly[i] === 'x') xNum++;
            else xNum += Number(newPoly[i].replace('x',""));
        //num
        } else {
            num += Number(newPoly[i]);
        }
    }
    
//     if(xNum === 1){
//         if(num === 0) result = `x`;
//         else if(xNum === 0) result = `${num}`;
//         else result = `x + ${num}`;
//     } else {
//         if(num === 0) result = `${xNum}x`;
//         else if(xNum === 0) result = `${num}`;
//         else result = `${xNum}x + ${num}`;
//     }
    
//     return result
    
    let arr = []
    if(xNum) arr.push(`${xNum === 1 ? '' : xNum}x`);
    if(num) arr.push(`${num}`);
    return arr.join(' + ')
    
}
