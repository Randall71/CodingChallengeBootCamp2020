const palindrome = (str) =>{
let strReverse = str.split('').reverse().join('')

return str === strReverse


}

console.log(palindrome('barik'))