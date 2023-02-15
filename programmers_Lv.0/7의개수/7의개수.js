function solution(array) {
    var answer = 0;
    
    for(var i=0; i<array.length; i++){
        var num = array[i].toString();
        for (var j=0; j<num.length; j++){
            if(num[j] == 7){
                answer += 1;
            };
        };
    };
    return answer;
}
