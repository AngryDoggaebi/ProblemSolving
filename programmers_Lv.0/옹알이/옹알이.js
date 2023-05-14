function solution(babbling) {
    let baby = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    function canPronounce(world){
        let i=0;
        while(i<4){
            world = [world[0].split(baby[i]).join(" ")];
            i++;
        }
        if(world.join('').replace(/ /g, "").length === 0){
            result++;
        }
    }
    
    for(let i=0; i<babbling.length; i++){
        canPronounce([babbling[i]]);
    }
    
    return result
    
}
