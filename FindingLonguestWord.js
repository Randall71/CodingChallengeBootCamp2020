const LonguestWord = (str) =>{

    //------------------solution 1--------------------
    //Qui ne donne qu'un seul mot le plus long du tableau
    

    // let arrStr = str.split(' ')
    // let longuest = 0
    // let longuestWord = ''

    // arrStr.forEach(el =>{
    //     if(el.length > longuest){
    //         longuestWord = el
    //         longuest = el.length
    //     }
    // })

    // return longuestWord



    //---------------------solution 2 -----------------------
    //Qui donne tous les mots les plus longs du tableau sans répétition


    let arrStr = str.split(' ')
    let longuestLength = 0
    let result = []
    arrStr.forEach(el => {
        if(el.length > longuestLength){
            longuestLength = el.length
        }
    })

   return  [...new Set(arrStr.filter((el) => el.length === longuestLength ))]

}


console.log(LonguestWord('Programming  is the best way in the world ! Programming is very good'))




