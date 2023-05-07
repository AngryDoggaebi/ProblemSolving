function solution(lines) {
    //lines[i][0~1] 연속된 수 다 출력해 a에 담기
    let a = []
    for(let i=0; i<lines.length; i++){
        let arr = [];
        for(let j=lines[i][0]; j<=lines[i][1]; j++){
            arr.push(j)
        }
        a.push(arr)
    }
    
    //2개 이상 겹치는 수(선) overlap에 담기
    let overlap = [];
    for(let i=0; i<a.length; i++){
        let arr = [];
        //겹치는 선 찾는 함수
        function finder(n1, n2, i, j){
            if(a[n1].includes(a[i][j]) && a[n1].includes(a[i][j+1]) 
               || a[n2].includes(a[i][j]) && a[n2].includes(a[i][j+1])){
                        if(!arr.includes(a[i][j]))arr.push(a[i][j]);
                        if(!arr.includes(a[i][j+1]))arr.push(a[i][j+1]);
                    }
        }
        for(let j=0; j<a[i].length; j++){
            if(i===0) finder(1, 2, i, j);
            if(i===1) finder(2, 0, i, j);
            if(i===2) finder(0, 1, i, j);
        }
        overlap.push(arr);
    }
    
    //overlap에서 가장 긴 선 빼기
    let arr=overlap.map(v=>v.length)
    let longestLine = overlap.splice(arr.indexOf(Math.max(...arr)), 1)
    
    //가장 긴 선 뺀 나머지 중 겹치는 것이 있으면 가장 긴 선의 길이-1 리턴    
    for(let i=0; i<overlap.length; i++){
        for(let j=0; j<overlap[i].length; j++){
            if(i===0){
                if(overlap[1].includes(overlap[i][j]))return longestLine[0].length-1
            }
            else if(i===1){
                if(overlap[0].includes(overlap[i][j]))return longestLine[0].length-1
            }
        }
    }
    
    // 겹치는 것이 없으면 짧은 두 선 길이-1 합쳐 리턴
    let lineA = 0
    let lineB = 0
    if(overlap[0].length===0)lineA=0; else lineA=overlap[0].length-1
    if(overlap[1].length===0)lineB=0; else lineB=overlap[1].length-1
    
    return lineA + lineB
    
}
