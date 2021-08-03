function colourAssociation(array){
    var returnValue = []
   
     for (let i = 0; i < array.length; i++) {
       tempArray = array[i]
   
       var returnObject = {
         [tempArray[0]]: tempArray[1]
       }
   
       returnValue.push(returnObject);
     }
     console.log(returnValue);
}

/*
function colourAssociation(array){
    var returnValue = []
   
     for (let i = 0; i < array.length; i++) {
       tempArray = array[i]
   
       returnValue.push({ [tempArray[0]]: tempArray[1] })
     }
     
  
  return array.map( e => ( { [e[0]]: e[1]} ))
}

*/

colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}];


colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}];