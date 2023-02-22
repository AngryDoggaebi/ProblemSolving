function solution(array) {
    var answer = [];
    let num = Math.max.apply(null, array);
    answer.push(num);
    let numIndex = array.indexOf(num);
    answer.push(numIndex);
    
    return answer;
}
