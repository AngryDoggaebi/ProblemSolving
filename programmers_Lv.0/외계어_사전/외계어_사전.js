function solution(spell, dic) {
    let arr = dic.filter(v => v.length === spell.length)
    let cnt = 0;
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<spell.length; j++){
            if(arr[i].includes(spell[j])){
                cnt++;
                if(cnt === spell.length) return 1;
            } else {
                cnt = 0;
                break;
            }
        }
    }
    return 2 
}
