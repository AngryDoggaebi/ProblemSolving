function solution(my_str, n) {
    var answer = [];
    const n_num = n;
    my_str = my_str.split('');
    for (var i = 0; i < my_str.length; i++){
        if(i === n){
            my_str.splice(n,0,'-');
            n = n_num + n + 1;
        }  
    }
    answer = my_str.join("");
    answer = answer.split("-");
    return answer;
}
