function solution(keymap, targets) {
    var answer = [];
    let n = 0;
    let cnt = 0;
    for(let i=0; i<targets.length; i++){
        for(let j=0; j<targets[i].length; j++){
            let arr = [];
            for(let k=0; k<keymap.length; k++){
                if(keymap[k].includes(targets[i][j])){
                    n = (keymap[k].indexOf(targets[i][j]));   
                } else { n = 101; }  
                arr.push(n);
            }
            if(Math.min(...arr) === 101){
                cnt = -1;
            } else {
                cnt+=Math.min(...arr)+1;
            }
        }
        answer.push(cnt);
        cnt = 0;
    }   
    return answer;
}

//실패(정확성: 56.5)
