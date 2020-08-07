const asc = (arr) =>{
  return   arr.sort((a,b) => a - b )
}

const desc = (arr) =>{
    return   arr.sort((a,b) => b - a )
  }


console.log(asc([8,4,9]))
console.log(desc([8,4,9,15,-4]))
