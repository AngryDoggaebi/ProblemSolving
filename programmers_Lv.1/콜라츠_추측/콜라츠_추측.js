function solution(num) {
    
    let copyNum = num;
    let cnt = 0;
    
    while (cnt !== 500 && copyNum !== 1){
        
        copyNum % 2 === 0
            ? copyNum = copyNum / 2
            : copyNum = (copyNum * 3) + 1
        
        cnt += 1;
    }
    
    return copyNum === 1 ? cnt : -1
}
