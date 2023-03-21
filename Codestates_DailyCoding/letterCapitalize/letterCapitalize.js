function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.

  if(str.length === 0) return '';
  str = str.split(' ')
  let result = [];
  for(let i=0; i<str.length; i++){
    if(str[i]!==''){
      result.push(str[i].replace(str[i][0], str[i][0].toUpperCase()))
    } else {
      result.push('')
    }
  }
  return result.join(' ');
}
