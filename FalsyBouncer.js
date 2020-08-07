const bouncer = (arr) =>{
    let result = []

    //---------- solution 1 --------------
    // arr.forEach(el =>{
    //     if(!!el){
    //         result.push(el)
    //     }
    // })

    //------solution 2 --------------

   result =  arr.filter(el => !!el)

    console.log(result)
}


bouncer(['1','2','', false, 'js',  undefined])
bouncer(['1',8,'', true, 'js',  null])
bouncer([1, 2, 'b', 0, {}, '', NaN, 3, undefined, null, -8, -1])
