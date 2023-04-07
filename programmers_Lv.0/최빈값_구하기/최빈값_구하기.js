function solution(array) {
    const arrSet = [...new Set(array)];
    let numOfelemInArrSet = [];
    let mostCharNum = 0;
    
    for(let i=0; i<arrSet.length; i++){
        let n = 0;
        for(let j=0; j<array.length; j++){
            if(arrSet[i] === array[j]){
                n++;
            }
        }
        numOfelemInArrSet.push(n)
    }
    
    for(let i=0; i<numOfelemInArrSet.length; i++){
        if(numOfelemInArrSet[i] > mostCharNum){
            mostCharNum = numOfelemInArrSet[i];
        }
    }
    
    if(numOfelemInArrSet.indexOf(mostCharNum) === numOfelemInArrSet.lastIndexOf(mostCharNum)){
        return arrSet[numOfelemInArrSet.indexOf(mostCharNum)]
    } else {
        return -1;
    }
}
