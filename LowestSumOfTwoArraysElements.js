const LowestSum  = (arr) =>{ 
   let descArr = arr.sort((a,b) => a - b )

   return descArr[0] + descArr[1]
}

console.log(LowestSum([4,3,9,8,2,1]))
console.log(LowestSum([8,4,-2,5]))
console.log(LowestSum([100,400,140,345,145]))