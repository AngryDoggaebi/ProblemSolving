function solution(a, b) {
    let i=2;
    
    while(true){
        if(i > a) break;
        if(a%i===0 && b%i===0){
            a = a/i;
            b = b/i;
            i = 2;
        } else {
            i++;
        }
    }
  
    if(a%b === 0 || b%5===0 || b%2===0){
        //2, 5 외의 다른 수로 나누어지면 유한소수 아님.
        for(let i = 3; i < b; i++){
            if(i%2===0 || i%5===0){
                continue;
            } else {
                if(b%i === 0) return 2;
            }
        }
        return 1;  
    }else{
        return 2;
    }
    
}
