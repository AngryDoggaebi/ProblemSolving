function solution(chicken) {
    //서비스로 먹은 치킨의 전체 마리수
    let n = Math.floor(chicken/10);
    //전체 쿠폰 = 남은 쿠폰 + 서비스 먹고 받은 쿠폰
    let coupon = (chicken%10)+n;
    
   
    while(coupon > 0){
        //전체 쿠폰이 10이하면 더이상 서비스 못 받으므로 n 리턴
        if(coupon < 10) return n;
        
        //전체 쿠폰이 10 이상이면 
        //쿠폰/10을 버림한 수 만큼 먹은 치킨 수 n에 추가
        n += Math.floor(coupon/10);
        //전체 쿠폰 = 남은 쿠폰 + 서비스 먹고 받은 쿠폰
        coupon = (coupon%10) + Math.floor(coupon/10);;    
         
    }
    return n
}
