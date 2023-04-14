function solution(my_string) {
    let upper = my_string.split("").map((v)=>{return v.toUpperCase()});
    let result = []
    for(let i=0; i<my_string.length; i++){
        if (upper[i]===my_string[i]){
            result.push(my_string[i].toLowerCase());
        } else {
            result.push(my_string[i].toUpperCase());
        }
    }
    return result.join("")
}
