// const reverse = (str) =>{
//  return str.split('').reverse().join('')
// }


// console.log(reverse('Programming'))

function reverse(str) {
    let reversed = '';
    for (let i = 0; i<str.length; i++) {
        reversed = str[i] + reversed       ;
    }
    return reversed;
}

console.log(reverse('hi'));