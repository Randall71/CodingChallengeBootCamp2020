const confirmEnding = (str, ch) =>{

    let lastLetter = str[str.length - 1]
    return lastLetter === ch 

}
console.log(confirmEnding('hello', 'o'))
console.log(confirmEnding('hello', 'c'))
