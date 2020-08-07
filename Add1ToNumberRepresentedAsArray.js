const adder = (arr) =>{

    //solution 1 
    // let sum = ''
    // let result = 0
    // let arrToString = arr.toString().split(',')
    // arrToString.forEach(el =>sum += el)
    // result = parseInt(sum) + 1
    // return result.toString().split('')


    //solution 2 
    let sum = ''
    let arrToString = arr.join().split(',')
    arrToString.forEach(el => sum+= el )
    return (parseInt(sum) + 1).toString().split('') 





    console.log(sum)
}


console.log(adder([1, 2, 3]))
console.log(adder([9, 9, 9]))
