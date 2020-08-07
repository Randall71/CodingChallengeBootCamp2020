const HighestSum  = (arr) =>{ 
    let ascArr = arr.sort((a,b) => b - a )
 
    return ascArr[0] + ascArr[1]
 }
 
 console.log(HighestSum([4,3,9,8,2,1]))
 console.log(HighestSum([8,4,-2,5]))
 console.log(HighestSum([100,400,140,345,145]))