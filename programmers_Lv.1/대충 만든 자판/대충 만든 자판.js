function solution(keymap, targets) {
    var answer = [];
    let cnt = 0;
    for(let i; i<targets.length; i++){
        for(let j; j<keymap.length; j++){
            for(let k; k<targets[i].length; k++){
                if(keymap[j].includes(targets[i][k])){
                    if(cnt > indexof((targets[i][k])+1)){
                        cnt = indexof(targets[i][k])+1;
                    }
                    cnt = 0;
                }
                answer.push(cnt);
            }
        }
    }
    return answer;
}

//미완성 코드(실행안됨)
