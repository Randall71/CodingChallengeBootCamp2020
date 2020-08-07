const sumInRange = (range) =>{
    
    let arr = range.split('-')
    let sum = 0
    for(let i = arr[0] ; i <= arr[1] ; i++){
        sum += parseInt(i)
    }
    return sum
}

console.log(sumInRange('10-20'))