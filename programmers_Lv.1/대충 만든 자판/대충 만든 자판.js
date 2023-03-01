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
                cnt = Math.min(...arr);
            }
        }
        answer.push(cnt);
    }

//미완성 코드(실행안됨)
