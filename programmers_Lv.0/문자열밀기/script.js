function solution(A, B) {
    var answer = 0;
    var cnt = A.length;
  
    if(A == B){
        answer = 0;
    }else if(A != B){
        for(var i=0; i<cnt; i++){
            var arr_A = A.split("");
            arr_A.splice(0,0,arr_A[cnt-1]);
            arr_A.splice(arr_A.length - 1);
            answer++;
            A = arr_A.join("");
            if(A == B){
                return answer;
            } else{
                if(answer == cnt){
                    answer = -1;
                }
            }
        }                  
    }
    return answer;
}
