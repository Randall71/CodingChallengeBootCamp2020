const count = (str) => {

    let results = []
    
    str.split(' ')
        .forEach(el => {
            if(/[a-zA-Z0-9]/.test(el)){
                results.push(el)
            }
        })
        
     console.log(results.length)
     
}

// La ponctuation n'est pas prise en compte comme un mot ici 

count('Programming is the best way in the world')
count('Programming is the best way in the world !')