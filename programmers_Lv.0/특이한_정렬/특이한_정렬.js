function solution(numlist, n) {
    let arr = [...numlist].map(v => v-n); 
    let arr2 = [...arr].map(v => Math.abs(v));
    let result = [];
    
    arr2.sort((a, b) => a-b);
    
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] === arr2[i-1]){
            arr2[i] = arr2[i] * -1;
            result.push(numlist[arr.indexOf(arr2[i])]);
        } else {
            if(arr.includes(arr2[i])){
                result.push( numlist[arr.indexOf(arr2[i])] );
            } else {
                arr2[i] = arr2[i] * -1;
                result.push( numlist[arr.indexOf(arr2[i])] );
            }
            
        }
    }

    return result
    
}
