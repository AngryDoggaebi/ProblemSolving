function solution(keyinput, board) {
    var answer = [];
    let leftRight = 0;
    let upDown = 0;
    let boardWide = (board[0]-1)/2;
    let boardHeight = (board[1]-1)/2;
    
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === 'left'){
            if(leftRight > -boardWide){
               leftRight -= 1;
            }
        } else if (keyinput[i] === 'right'){
            if(leftRight < boardWide){
               leftRight += 1;
            }
        } else if (keyinput[i] === 'up'){
            if(upDown < boardHeight){
               upDown += 1;
            }
        } else if (keyinput[i] === 'down'){
            if(upDown > -boardHeight){
               upDown -= 1;
            } 
        }
    }
    
    answer = [leftRight, upDown];
    return answer;
}
