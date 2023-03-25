function solution(common) {
    var answer = 0;
    if(common[1] - common[0] === common[2] - common[1]){
        let num = common[1]-common[0];
        return common[common.length-1]+num;
    }else{
        return (common[1]/common[0])*common[common.length-1]
    }
}
