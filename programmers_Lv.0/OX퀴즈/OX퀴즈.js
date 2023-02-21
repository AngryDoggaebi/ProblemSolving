function solution(quiz) {
    var answer = []
    var arr;
    
    for (let i=0; i<quiz.length; i++){
        arr = quiz[i].split(" ");
        
        if(arr[1]==='+'){
            parseInt(arr[0])+parseInt(arr[2])===parseInt(arr[4]) ?
            answer.push("O") : answer.push("X");
        } else if(arr[1]==='-'){
            parseInt(arr[0])-parseInt(arr[2])===parseInt(arr[4]) ?
            answer.push("O") : answer.push("X");
        }
    }
    return answer;
}
