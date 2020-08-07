const summArrEl = (...elements) =>{

    //----------solution 1---------------

    // let sum = 0 
    // for(element of elements){
    //     sum += element 
    // }
    // console.log(`Summary is: ${sum}`)

    //----------solution 2---------------

    let sum = 0
    elements.forEach(val => sum += val)
    console.log(`Summary is: ${sum}`)
    
}

summArrEl(...[4,7,5])
summArrEl(8,485,4)

