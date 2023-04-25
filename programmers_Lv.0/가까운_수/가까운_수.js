function solution(array, n) {
    array.push(n)
    array.sort((a,b)=> a-b)
    
    let nIndex = array.findIndex(x => x===n);
    
    if(nIndex===0)return array[1];
    else if(nIndex === array.length-1) return array[array.length-2];
    else return n - array[nIndex-1] > array[nIndex+1] - n ?
        array[nIndex+1] : array[nIndex-1]

}
