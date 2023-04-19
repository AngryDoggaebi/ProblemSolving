function solution(numbers) {
    let n = numbers.split("")
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = [];
    
    //n의 길이가 0이 될 때까지 for문 계속 반복
    while(true){
        if(n.length === 0) break;
        //arr을 돌면서
        for(let i=0; i<arr.length; i++){
            //n[0]과 arr[i]의 첫 번째 알파벳이 같은 요소를 찾음
            if(n[0]===arr[i][0]){
                //arr[i]의 길이만큼 잘라 check에 추가
                let check = n.splice(0,arr[i].length).join("");
                //check와 arr[i]가 같으면 arr[i]의 인덱스를 result에 푸쉬 
                if(check === arr[i]) {
                    result.push(arr.indexOf(arr[i]));
                }
                //check와 arr[i]가 다르면 잘라낸 check를 다시 배열 n에 집어넣기
                else {
                    n = [...check.split(""), ...n]
                }
            }
        } 
    }

    return Number(result.join(""))
}
