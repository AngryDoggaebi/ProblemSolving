function solution(num, k) {
    //num을 문자열로 바꾼 후 배열에 하나씩 담아
    //for문을 돌면서 if문으로 k가 있는지 확인 후 리턴

    let arr = num.toString().split("");
    for(let i=0; i<arr.length; i++){
        if(arr[i] === k.toString()){
            return i+1
        }
    }
    return -1;
}
