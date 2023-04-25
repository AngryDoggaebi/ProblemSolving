function solution(letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    let arr = letter.split(" ");
    let morseKeys =  Object.keys(morse);
    let morseValue = Object.values(morse);
    let result = []
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<morseKeys.length; j++){
            if(arr[i] === morseKeys[j]){
                result.push(morseValue[j])
            }
        }
    }
    return result.join("")
    
}
