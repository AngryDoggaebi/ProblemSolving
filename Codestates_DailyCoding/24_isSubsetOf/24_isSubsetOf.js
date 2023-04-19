const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  let baseCopy = [...base].sort((a, b)=> a-b)
  let sampleCopy = [...sample].sort((a, b)=> a-b)

  for(let i=0; i<sampleCopy.length; i++){
    //includes(검색할 문자, 검색을 시작할 위치)
    if(baseCopy.includes(sampleCopy[i], i) === false){
      return false
    }
  }
  return true

  //테스트는 모두 통과했지만 sample[i]의 인덱스를 검색을 시작할 base의 인덱스로 지정했기 때문에
  //sample[i]인덱스와 sample[i]와 같은 숫자가 든 base의 인덱스가 멀수록 검색 효율이 떨어질듯.
};
