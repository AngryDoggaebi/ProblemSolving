function solution(my_string) {
    var answer = '';
    
    my_string = my_string.toLowerCase();
    my_string = my_string.split("");
    my_string = my_string.sort();
    answer = my_string.join("");
    
    return answer;
}
