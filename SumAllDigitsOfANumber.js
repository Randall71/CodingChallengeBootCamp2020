const counter = (number) => {
    let sum = 0 
    number.toString()   
            .split('')
            .forEach(el=> sum += parseInt(el))

    console.log(sum)
}


counter(225)
counter(1237875984548)