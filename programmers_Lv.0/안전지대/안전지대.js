function solution(board) {
    // create a deep copy of the input board
    let newBoard = JSON.parse(JSON.stringify(board)); 
    
    //사방을 위험지대(2)로 둘러싸기 (모서리와 가측 경우의 수 신경쓰지 않기 위해)
    for(let i=0; i<newBoard.length; i++){
        newBoard[i].push(2);
        newBoard[i].unshift(2);
    }
    let arr = Array(newBoard[0].length).fill().map( v => v=2)
    newBoard.push(arr)
    newBoard.unshift(arr)
    
    //위험지대(2)로 변경 가능한지 체크하는 함수
    function getCellValue(n1, n2){
        if(newBoard[n1][n2] === 0 || newBoard[n1][n2] === 2){
            return 2
        } else {
            return 1
        }
    }
    
    //이중for문 돌면서
    for(let i=0; i<newBoard.length; i++){
        for(let j=0; j<newBoard[i].length; j++){
            //1(폭탄)이 나오는 경우
            if(newBoard[i][j] === 1){
                //양 가측이 아닌 경우 getCellValue함수 불러 2(위험지대)로 변경
                //위에서 사방을 2로 둘러싸놨으므로 가측과 모서리의 경우 생각 X
                if(j>=1 && j!==newBoard[i].length-1){
                    newBoard[i][j-1] = getCellValue(i, j-1);
                    newBoard[i][j+1] = getCellValue(i, j+1);
                }
                if(i>=1 && i<newBoard.length-1){
                    newBoard[i-1][j] = getCellValue(i-1, j);
                    newBoard[i-1][j-1] = getCellValue(i-1, j-1);
                    newBoard[i-1][j+1] = getCellValue(i-1, j+1);
                    newBoard[i+1][j] = getCellValue(i+1, j);
                    newBoard[i+1][j-1] = getCellValue(i+1, j-1);
                    newBoard[i+1][j+1] = getCellValue(i+1, j+1);
                }
            }
        }
    }
    //다시 이중for문 돌면서 안전지대(0) 개수 카운트
    let cnt = 0; 
    for(let i=0; i<newBoard.length; i++){
        for(let j=0; j<newBoard[i].length; j++){
            if(newBoard[i][j]===0){
                cnt++;
            }
        }
    }
    
    //안전지대(0) 개수 리턴
    return cnt
}
