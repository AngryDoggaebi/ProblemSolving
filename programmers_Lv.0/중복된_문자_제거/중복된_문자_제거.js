function solution(my_string) {
    let newString = new Set(my_string.split(""))
    return [...newString].join("")
}
