function solution(my_string) {
    
    let arr = my_string.split(" ");
    let x = Number(arr[0]);
    
    for(let i=2; i<arr.length; i++){
        if(i%2===0 && arr[i-1] === '+'){
            x+=Number(arr[i]);
        } else if(i%2===0 && arr[i-1] === '-') {
            x-=Number(arr[i]);
        }
    }
    
    return x
    
}
