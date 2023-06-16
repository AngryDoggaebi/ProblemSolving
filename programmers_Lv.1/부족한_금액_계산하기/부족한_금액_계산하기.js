function solution(price, money, count) {
    const arr = Array(count).fill().map((v, i)=> {return i+1})
    const needMoney = arr.reduce((acc, cur) => acc + (cur * price) ,0);
    
    return needMoney > money ? needMoney - money : 0
}
