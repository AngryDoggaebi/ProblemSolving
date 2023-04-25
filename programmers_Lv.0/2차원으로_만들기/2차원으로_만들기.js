function solution(num_list, n) {
    let newList = [...num_list]
    let result = []
    
    while(newList.length){
        result.push(newList.splice(0, n))
    }
    
    return result
}
