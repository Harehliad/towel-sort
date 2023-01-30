
module.exports = function towelSort (mass) {
   if (undefined == mass){
    return []
   }
  console.log (mass)
  let j = 0;
   let resault=[]
   for(let i = 0; i < mass.length; i++){
       if ( 0 != j%2){
           resault = resault.concat(mass[i].reverse()) 
           j +=1
       } else {
           resault = resault.concat(mass[i])
           j +=1
       }
   }
   return resault;
 } 
