function solution(id_pw, db) {
    let id = db.find((x, i)=>{return x[0] === id_pw[0]});
    
    if (id === undefined) return 'fail';
    else if(id_pw[1] !== id[1]) return 'wrong pw';
    else return 'login';
}
